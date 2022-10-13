package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomesticScheduledPaymentConsentsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"name=x-idempotency-key"`
	XJwsSignature          string  `header:"name=x-jws-signature"`
}

type CreateDomesticScheduledPaymentConsentsRequests struct {
	ApplicationJosePlusJwe           []byte                                   `request:"mediaType=application/jose+jwe"`
	ObWriteDomesticScheduledConsent4 *shared.ObWriteDomesticScheduledConsent4 `request:"mediaType=application/json"`
	ObWriteDomesticScheduledConsent5 *shared.ObWriteDomesticScheduledConsent4 `request:"mediaType=application/json"`
}

type CreateDomesticScheduledPaymentConsentsSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateDomesticScheduledPaymentConsentsRequest struct {
	Headers  CreateDomesticScheduledPaymentConsentsHeaders
	Request  CreateDomesticScheduledPaymentConsentsRequests
	Security CreateDomesticScheduledPaymentConsentsSecurity
}

type CreateDomesticScheduledPaymentConsentsResponse struct {
	Body                                     []byte
	ContentType                              string
	Headers                                  map[string][]string
	ObErrorResponse1                         *shared.ObErrorResponse1
	ObWriteDomesticScheduledConsentResponse5 *shared.ObWriteDomesticScheduledConsentResponse5
	StatusCode                               int64
}
