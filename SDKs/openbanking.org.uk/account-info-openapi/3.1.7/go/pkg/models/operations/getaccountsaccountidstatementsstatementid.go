package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDStatementsStatementIDPathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=AccountId"`
	StatementID string `pathParam:"style=simple,explode=false,name=StatementId"`
}

type GetAccountsAccountIDStatementsStatementIDHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStatementsStatementIDSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDStatementsStatementIDRequest struct {
	PathParams GetAccountsAccountIDStatementsStatementIDPathParams
	Headers    GetAccountsAccountIDStatementsStatementIDHeaders
	Security   GetAccountsAccountIDStatementsStatementIDSecurity
}

type GetAccountsAccountIDStatementsStatementIDResponse struct {
	Body             []byte
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadStatement2 *shared.ObReadStatement2
	StatusCode       int64
}
