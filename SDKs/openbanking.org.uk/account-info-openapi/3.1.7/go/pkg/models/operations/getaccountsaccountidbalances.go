package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDBalancesPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
}

type GetAccountsAccountIDBalancesHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDBalancesSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDBalancesRequest struct {
	PathParams GetAccountsAccountIDBalancesPathParams
	Headers    GetAccountsAccountIDBalancesHeaders
	Security   GetAccountsAccountIDBalancesSecurity
}

type GetAccountsAccountIDBalancesResponse struct {
	Body             []byte
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadBalance1   *shared.ObReadBalance1
	StatusCode       int64
}
