package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDStatementsStatementIDTransactionsPathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=AccountId"`
	StatementID string `pathParam:"style=simple,explode=false,name=StatementId"`
}

type GetAccountsAccountIDStatementsStatementIDTransactionsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStatementsStatementIDTransactionsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDStatementsStatementIDTransactionsRequest struct {
	PathParams GetAccountsAccountIDStatementsStatementIDTransactionsPathParams
	Headers    GetAccountsAccountIDStatementsStatementIDTransactionsHeaders
	Security   GetAccountsAccountIDStatementsStatementIDTransactionsSecurity
}

type GetAccountsAccountIDStatementsStatementIDTransactionsResponse struct {
	Body               []byte
	ContentType        string
	Headers            map[string][]string
	ObErrorResponse1   *shared.ObErrorResponse1
	ObReadTransaction6 *shared.ObReadTransaction6
	StatusCode         int64
}
