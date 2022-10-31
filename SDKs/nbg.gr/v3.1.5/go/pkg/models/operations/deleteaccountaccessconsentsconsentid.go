package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountAccessConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=consentId"`
}

type DeleteAccountAccessConsentsConsentIDHeaders struct {
	SandboxID              string  `header:"style=simple,explode=false,name=sandbox-id"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type DeleteAccountAccessConsentsConsentIDSecurity struct {
	ClientCredentialsToken shared.SchemeClientCredentialsToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteAccountAccessConsentsConsentIDRequest struct {
	PathParams DeleteAccountAccessConsentsConsentIDPathParams
	Headers    DeleteAccountAccessConsentsConsentIDHeaders
	Security   DeleteAccountAccessConsentsConsentIDSecurity
}

type DeleteAccountAccessConsentsConsentIDResponse struct {
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	StatusCode       int64
}
