package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDStatementsStatementIDFilePathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=AccountId"`
	StatementID string `pathParam:"style=simple,explode=false,name=StatementId"`
}

type GetAccountsAccountIDStatementsStatementIDFileHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStatementsStatementIDFileSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDStatementsStatementIDFileRequest struct {
	PathParams GetAccountsAccountIDStatementsStatementIDFilePathParams
	Headers    GetAccountsAccountIDStatementsStatementIDFileHeaders
	Security   GetAccountsAccountIDStatementsStatementIDFileSecurity
}

type GetAccountsAccountIDStatementsStatementIDFileResponse struct {
	Body             []byte
	ContentType      string
	File             map[string]interface{}
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	StatusCode       int64
}
