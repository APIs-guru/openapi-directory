package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDStandingOrdersPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
}

type GetAccountsAccountIDStandingOrdersHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStandingOrdersSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDStandingOrdersRequest struct {
	PathParams GetAccountsAccountIDStandingOrdersPathParams
	Headers    GetAccountsAccountIDStandingOrdersHeaders
	Security   GetAccountsAccountIDStandingOrdersSecurity
}

type GetAccountsAccountIDStandingOrdersResponse struct {
	Body                 []byte
	ContentType          string
	Headers              map[string][]string
	ObErrorResponse1     *shared.ObErrorResponse1
	ObReadStandingOrder6 *shared.ObReadStandingOrder6
	StatusCode           int64
}
