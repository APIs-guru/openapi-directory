package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDStatementsStatementIDPathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=accountId"`
	StatementID string `pathParam:"style=simple,explode=false,name=statementId"`
}

type GetAccountsAccountIDStatementsStatementIDHeaders struct {
	SandboxID              string  `header:"name=sandbox-id"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStatementsStatementIDSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDStatementsStatementIDRequest struct {
	PathParams GetAccountsAccountIDStatementsStatementIDPathParams
	Headers    GetAccountsAccountIDStatementsStatementIDHeaders
	Security   GetAccountsAccountIDStatementsStatementIDSecurity
}

type GetAccountsAccountIDStatementsStatementIDResponse struct {
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadStatement2 *shared.ObReadStatement2
	StatusCode       int64
}
