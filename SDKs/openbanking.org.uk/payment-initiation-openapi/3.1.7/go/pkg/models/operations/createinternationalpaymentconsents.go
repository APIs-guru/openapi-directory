package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInternationalPaymentConsentsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"name=x-idempotency-key"`
	XJwsSignature          string  `header:"name=x-jws-signature"`
}

type CreateInternationalPaymentConsentsRequests struct {
	ApplicationJosePlusJwe       []byte                               `request:"mediaType=application/jose+jwe"`
	ObWriteInternationalConsent5 *shared.ObWriteInternationalConsent5 `request:"mediaType=application/json"`
	ObWriteInternationalConsent6 *shared.ObWriteInternationalConsent5 `request:"mediaType=application/json"`
}

type CreateInternationalPaymentConsentsSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateInternationalPaymentConsentsRequest struct {
	Headers  CreateInternationalPaymentConsentsHeaders
	Request  CreateInternationalPaymentConsentsRequests
	Security CreateInternationalPaymentConsentsSecurity
}

type CreateInternationalPaymentConsentsResponse struct {
	Body                                 []byte
	ContentType                          string
	Headers                              map[string][]string
	ObErrorResponse1                     *shared.ObErrorResponse1
	ObWriteInternationalConsentResponse6 *shared.ObWriteInternationalConsentResponse6
	StatusCode                           int64
}
