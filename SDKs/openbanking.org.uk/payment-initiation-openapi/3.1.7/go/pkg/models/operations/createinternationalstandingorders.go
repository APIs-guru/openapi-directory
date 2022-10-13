package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInternationalStandingOrdersHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"name=x-idempotency-key"`
	XJwsSignature          string  `header:"name=x-jws-signature"`
}

type CreateInternationalStandingOrdersRequests struct {
	ApplicationJosePlusJwe             []byte                                     `request:"mediaType=application/jose+jwe"`
	ObWriteInternationalStandingOrder4 *shared.ObWriteInternationalStandingOrder4 `request:"mediaType=application/json"`
	ObWriteInternationalStandingOrder5 *shared.ObWriteInternationalStandingOrder4 `request:"mediaType=application/json"`
}

type CreateInternationalStandingOrdersSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateInternationalStandingOrdersRequest struct {
	Headers  CreateInternationalStandingOrdersHeaders
	Request  CreateInternationalStandingOrdersRequests
	Security CreateInternationalStandingOrdersSecurity
}

type CreateInternationalStandingOrdersResponse struct {
	Body                                       []byte
	ContentType                                string
	Headers                                    map[string][]string
	ObErrorResponse1                           *shared.ObErrorResponse1
	ObWriteInternationalStandingOrderResponse7 *shared.ObWriteInternationalStandingOrderResponse7
	StatusCode                                 int64
}
