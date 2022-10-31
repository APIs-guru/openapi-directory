package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountAccessConsentsHeaders struct {
	SandboxID              string  `header:"style=simple,explode=false,name=sandbox-id"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type PostAccountAccessConsentsRequests struct {
	ObReadConsent1 *shared.ObReadConsent1 `request:"mediaType=application/json"`
	ObReadConsent2 *shared.ObReadConsent1 `request:"mediaType=application/json"`
}

type PostAccountAccessConsentsSecurity struct {
	ClientCredentialsToken shared.SchemeClientCredentialsToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type PostAccountAccessConsentsRequest struct {
	Headers  PostAccountAccessConsentsHeaders
	Request  *PostAccountAccessConsentsRequests
	Security PostAccountAccessConsentsSecurity
}

type PostAccountAccessConsentsResponse struct {
	ContentType            string
	Headers                map[string][]string
	ObErrorResponse1       *shared.ObErrorResponse1
	ObReadConsentResponse1 *shared.ObReadConsentResponse1
	StatusCode             int64
}
