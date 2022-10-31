package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAccountsAccountIDTransactionsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountsAccountIDTransactionsQueryParams struct {
	FromBookingDateTime *time.Time `queryParam:"style=form,explode=true,name=fromBookingDateTime"`
	ToBookingDateTime   *time.Time `queryParam:"style=form,explode=true,name=toBookingDateTime"`
}

type GetAccountsAccountIDTransactionsHeaders struct {
	SandboxID              string  `header:"style=simple,explode=false,name=sandbox-id"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDTransactionsSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDTransactionsRequest struct {
	PathParams  GetAccountsAccountIDTransactionsPathParams
	QueryParams GetAccountsAccountIDTransactionsQueryParams
	Headers     GetAccountsAccountIDTransactionsHeaders
	Security    GetAccountsAccountIDTransactionsSecurity
}

type GetAccountsAccountIDTransactionsResponse struct {
	ContentType        string
	Headers            map[string][]string
	ObErrorResponse1   *shared.ObErrorResponse1
	ObReadTransaction6 *shared.ObReadTransaction6
	StatusCode         int64
}
