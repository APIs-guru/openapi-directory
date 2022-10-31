package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomesticPaymentConsentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateDomesticPaymentConsentsRequests struct {
	ApplicationJosePlusJwe  []byte                          `request:"mediaType=application/jose+jwe"`
	ObWriteDomesticConsent4 *shared.ObWriteDomesticConsent4 `request:"mediaType=application/json"`
	ObWriteDomesticConsent5 *shared.ObWriteDomesticConsent4 `request:"mediaType=application/json"`
}

type CreateDomesticPaymentConsentsSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateDomesticPaymentConsentsRequest struct {
	Headers  CreateDomesticPaymentConsentsHeaders
	Request  CreateDomesticPaymentConsentsRequests
	Security CreateDomesticPaymentConsentsSecurity
}

type CreateDomesticPaymentConsentsResponse struct {
	Body                            []byte
	ContentType                     string
	Headers                         map[string][]string
	ObErrorResponse1                *shared.ObErrorResponse1
	ObWriteDomesticConsentResponse5 *shared.ObWriteDomesticConsentResponse5
	StatusCode                      int64
}
