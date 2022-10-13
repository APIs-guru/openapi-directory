package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomesticScheduledPaymentsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"name=x-idempotency-key"`
	XJwsSignature          string  `header:"name=x-jws-signature"`
}

type CreateDomesticScheduledPaymentsRequests struct {
	ApplicationJosePlusJwe    []byte                            `request:"mediaType=application/jose+jwe"`
	ObWriteDomesticScheduled2 *shared.ObWriteDomesticScheduled2 `request:"mediaType=application/json"`
	ObWriteDomesticScheduled3 *shared.ObWriteDomesticScheduled2 `request:"mediaType=application/json"`
}

type CreateDomesticScheduledPaymentsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateDomesticScheduledPaymentsRequest struct {
	Headers  CreateDomesticScheduledPaymentsHeaders
	Request  CreateDomesticScheduledPaymentsRequests
	Security CreateDomesticScheduledPaymentsSecurity
}

type CreateDomesticScheduledPaymentsResponse struct {
	Body                              []byte
	ContentType                       string
	Headers                           map[string][]string
	ObErrorResponse1                  *shared.ObErrorResponse1
	ObWriteDomesticScheduledResponse5 *shared.ObWriteDomesticScheduledResponse5
	StatusCode                        int64
}
