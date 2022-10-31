package operations

import (
"openapi/pkg/models/shared")

type GetAccountsAccountIDStatementsStatementIDTransactionsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    StatementID string `pathParam:"style=simple,explode=false,name=statementId"`
    
}

type GetAccountsAccountIDStatementsStatementIDTransactionsHeaders struct {
    SandboxID string `header:"style=simple,explode=false,name=sandbox-id"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetAccountsAccountIDStatementsStatementIDTransactionsSecurity struct {
    AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAccountsAccountIDStatementsStatementIDTransactionsRequest struct {
    PathParams GetAccountsAccountIDStatementsStatementIDTransactionsPathParams 
    Headers GetAccountsAccountIDStatementsStatementIDTransactionsHeaders 
    Security GetAccountsAccountIDStatementsStatementIDTransactionsSecurity 
    
}

type GetAccountsAccountIDStatementsStatementIDTransactionsResponse struct {
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadTransaction6 *shared.ObReadTransaction6 
    StatusCode int64 
    
}

