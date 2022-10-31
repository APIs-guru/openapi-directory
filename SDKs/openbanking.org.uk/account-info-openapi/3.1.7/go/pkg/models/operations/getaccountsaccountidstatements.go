package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAccountsAccountIDStatementsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
    
}

type GetAccountsAccountIDStatementsQueryParams struct {
    FromStatementDateTime *time.Time `queryParam:"style=form,explode=true,name=fromStatementDateTime"`
    ToStatementDateTime *time.Time `queryParam:"style=form,explode=true,name=toStatementDateTime"`
    
}

type GetAccountsAccountIDStatementsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetAccountsAccountIDStatementsSecurity struct {
    PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetAccountsAccountIDStatementsRequest struct {
    PathParams GetAccountsAccountIDStatementsPathParams 
    QueryParams GetAccountsAccountIDStatementsQueryParams 
    Headers GetAccountsAccountIDStatementsHeaders 
    Security GetAccountsAccountIDStatementsSecurity 
    
}

type GetAccountsAccountIDStatementsResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadStatement2 *shared.ObReadStatement2 
    StatusCode int64 
    
}

