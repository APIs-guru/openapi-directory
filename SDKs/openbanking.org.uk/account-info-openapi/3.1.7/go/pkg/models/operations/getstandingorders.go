package operations

import (
	"openapi/pkg/models/shared"
)

type GetStandingOrdersHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetStandingOrdersSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetStandingOrdersRequest struct {
	Headers  GetStandingOrdersHeaders
	Security GetStandingOrdersSecurity
}

type GetStandingOrdersResponse struct {
	Body                 []byte
	ContentType          string
	Headers              map[string][]string
	ObErrorResponse1     *shared.ObErrorResponse1
	ObReadStandingOrder6 *shared.ObReadStandingOrder6
	StatusCode           int64
}
