package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInternationalPaymentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateInternationalPaymentsRequests struct {
	ApplicationJosePlusJwe []byte                        `request:"mediaType=application/jose+jwe"`
	ObWriteInternational3  *shared.ObWriteInternational3 `request:"mediaType=application/json"`
	ObWriteInternational4  *shared.ObWriteInternational3 `request:"mediaType=application/json"`
}

type CreateInternationalPaymentsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateInternationalPaymentsRequest struct {
	Headers  CreateInternationalPaymentsHeaders
	Request  CreateInternationalPaymentsRequests
	Security CreateInternationalPaymentsSecurity
}

type CreateInternationalPaymentsResponse struct {
	Body                          []byte
	ContentType                   string
	Headers                       map[string][]string
	ObErrorResponse1              *shared.ObErrorResponse1
	ObWriteInternationalResponse5 *shared.ObWriteInternationalResponse5
	StatusCode                    int64
}
