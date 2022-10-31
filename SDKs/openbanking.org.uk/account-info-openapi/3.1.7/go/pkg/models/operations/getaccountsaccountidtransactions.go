package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAccountsAccountIDTransactionsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
    
}

type GetAccountsAccountIDTransactionsQueryParams struct {
    FromBookingDateTime *time.Time `queryParam:"style=form,explode=true,name=fromBookingDateTime"`
    ToBookingDateTime *time.Time `queryParam:"style=form,explode=true,name=toBookingDateTime"`
    
}

type GetAccountsAccountIDTransactionsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetAccountsAccountIDTransactionsSecurity struct {
    PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetAccountsAccountIDTransactionsRequest struct {
    PathParams GetAccountsAccountIDTransactionsPathParams 
    QueryParams GetAccountsAccountIDTransactionsQueryParams 
    Headers GetAccountsAccountIDTransactionsHeaders 
    Security GetAccountsAccountIDTransactionsSecurity 
    
}

type GetAccountsAccountIDTransactionsResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadTransaction6 *shared.ObReadTransaction6 
    StatusCode int64 
    
}

