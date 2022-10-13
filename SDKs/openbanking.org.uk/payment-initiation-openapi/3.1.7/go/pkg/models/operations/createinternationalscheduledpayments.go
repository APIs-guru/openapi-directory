package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInternationalScheduledPaymentsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"name=x-idempotency-key"`
	XJwsSignature          string  `header:"name=x-jws-signature"`
}

type CreateInternationalScheduledPaymentsRequests struct {
	ApplicationJosePlusJwe         []byte                                 `request:"mediaType=application/jose+jwe"`
	ObWriteInternationalScheduled3 *shared.ObWriteInternationalScheduled3 `request:"mediaType=application/json"`
	ObWriteInternationalScheduled4 *shared.ObWriteInternationalScheduled3 `request:"mediaType=application/json"`
}

type CreateInternationalScheduledPaymentsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateInternationalScheduledPaymentsRequest struct {
	Headers  CreateInternationalScheduledPaymentsHeaders
	Request  CreateInternationalScheduledPaymentsRequests
	Security CreateInternationalScheduledPaymentsSecurity
}

type CreateInternationalScheduledPaymentsResponse struct {
	Body                                   []byte
	ContentType                            string
	Headers                                map[string][]string
	ObErrorResponse1                       *shared.ObErrorResponse1
	ObWriteInternationalScheduledResponse6 *shared.ObWriteInternationalScheduledResponse6
	StatusCode                             int64
}
