package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAccountsAccountIDStatementsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountsAccountIDStatementsQueryParams struct {
	FromStatementDateTime *time.Time `queryParam:"style=form,explode=true,name=fromStatementDateTime"`
	ToStatementDateTime   *time.Time `queryParam:"style=form,explode=true,name=toStatementDateTime"`
}

type GetAccountsAccountIDStatementsHeaders struct {
	SandboxID              string  `header:"name=sandbox-id"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStatementsSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDStatementsRequest struct {
	PathParams  GetAccountsAccountIDStatementsPathParams
	QueryParams GetAccountsAccountIDStatementsQueryParams
	Headers     GetAccountsAccountIDStatementsHeaders
	Security    GetAccountsAccountIDStatementsSecurity
}

type GetAccountsAccountIDStatementsResponse struct {
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadStatement2 *shared.ObReadStatement2
	StatusCode       int64
}
