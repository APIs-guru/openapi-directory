package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomesticStandingOrdersHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"name=x-idempotency-key"`
	XJwsSignature          string  `header:"name=x-jws-signature"`
}

type CreateDomesticStandingOrdersRequests struct {
	ApplicationJosePlusJwe        []byte                                `request:"mediaType=application/jose+jwe"`
	ObWriteDomesticStandingOrder3 *shared.ObWriteDomesticStandingOrder3 `request:"mediaType=application/json"`
	ObWriteDomesticStandingOrder4 *shared.ObWriteDomesticStandingOrder3 `request:"mediaType=application/json"`
}

type CreateDomesticStandingOrdersSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateDomesticStandingOrdersRequest struct {
	Headers  CreateDomesticStandingOrdersHeaders
	Request  CreateDomesticStandingOrdersRequests
	Security CreateDomesticStandingOrdersSecurity
}

type CreateDomesticStandingOrdersResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	ObErrorResponse1                      *shared.ObErrorResponse1
	ObWriteDomesticStandingOrderResponse6 *shared.ObWriteDomesticStandingOrderResponse6
	StatusCode                            int64
}
