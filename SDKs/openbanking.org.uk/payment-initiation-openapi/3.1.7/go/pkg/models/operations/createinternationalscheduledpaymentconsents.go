package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInternationalScheduledPaymentConsentsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"name=x-idempotency-key"`
	XJwsSignature          string  `header:"name=x-jws-signature"`
}

type CreateInternationalScheduledPaymentConsentsRequests struct {
	ApplicationJosePlusJwe                []byte                                        `request:"mediaType=application/jose+jwe"`
	ObWriteInternationalScheduledConsent5 *shared.ObWriteInternationalScheduledConsent5 `request:"mediaType=application/json"`
	ObWriteInternationalScheduledConsent6 *shared.ObWriteInternationalScheduledConsent5 `request:"mediaType=application/json"`
}

type CreateInternationalScheduledPaymentConsentsSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateInternationalScheduledPaymentConsentsRequest struct {
	Headers  CreateInternationalScheduledPaymentConsentsHeaders
	Request  CreateInternationalScheduledPaymentConsentsRequests
	Security CreateInternationalScheduledPaymentConsentsSecurity
}

type CreateInternationalScheduledPaymentConsentsResponse struct {
	Body                                          []byte
	ContentType                                   string
	Headers                                       map[string][]string
	ObErrorResponse1                              *shared.ObErrorResponse1
	ObWriteInternationalScheduledConsentResponse6 *shared.ObWriteInternationalScheduledConsentResponse6
	StatusCode                                    int64
}
