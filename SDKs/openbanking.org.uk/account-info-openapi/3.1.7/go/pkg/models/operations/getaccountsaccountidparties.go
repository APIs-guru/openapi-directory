package operations

import (
"openapi/pkg/models/shared")

type GetAccountsAccountIDPartiesPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
    
}

type GetAccountsAccountIDPartiesHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetAccountsAccountIDPartiesSecurity struct {
    PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetAccountsAccountIDPartiesRequest struct {
    PathParams GetAccountsAccountIDPartiesPathParams 
    Headers GetAccountsAccountIDPartiesHeaders 
    Security GetAccountsAccountIDPartiesSecurity 
    
}

type GetAccountsAccountIDPartiesResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadParty3 *shared.ObReadParty3 
    StatusCode int64 
    
}

