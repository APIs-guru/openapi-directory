package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDStatementsStatementIDFilePathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=accountId"`
	StatementID string `pathParam:"style=simple,explode=false,name=statementId"`
}

type GetAccountsAccountIDStatementsStatementIDFileHeaders struct {
	SandboxID              string  `header:"name=sandbox-id"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStatementsStatementIDFileSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDStatementsStatementIDFileRequest struct {
	PathParams GetAccountsAccountIDStatementsStatementIDFilePathParams
	Headers    GetAccountsAccountIDStatementsStatementIDFileHeaders
	Security   GetAccountsAccountIDStatementsStatementIDFileSecurity
}

type GetAccountsAccountIDStatementsStatementIDFileResponse struct {
	Body                                                                       []byte
	ContentType                                                                string
	GetAccountsAccountIDStatementsStatementIDFile200ApplicationPdfBinaryString []byte
	Headers                                                                    map[string][]string
	StatusCode                                                                 int64
}
