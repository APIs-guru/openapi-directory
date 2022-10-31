package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomesticPaymentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateDomesticPaymentsRequests struct {
	ApplicationJosePlusJwe []byte                   `request:"mediaType=application/jose+jwe"`
	ObWriteDomestic2       *shared.ObWriteDomestic2 `request:"mediaType=application/json"`
	ObWriteDomestic3       *shared.ObWriteDomestic2 `request:"mediaType=application/json"`
}

type CreateDomesticPaymentsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateDomesticPaymentsRequest struct {
	Headers  CreateDomesticPaymentsHeaders
	Request  CreateDomesticPaymentsRequests
	Security CreateDomesticPaymentsSecurity
}

type CreateDomesticPaymentsResponse struct {
	Body                     []byte
	ContentType              string
	Headers                  map[string][]string
	ObErrorResponse1         *shared.ObErrorResponse1
	ObWriteDomesticResponse5 *shared.ObWriteDomesticResponse5
	StatusCode               int64
}
