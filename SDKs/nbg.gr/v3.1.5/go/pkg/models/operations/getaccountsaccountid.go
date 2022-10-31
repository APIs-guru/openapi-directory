package operations

import (
"openapi/pkg/models/shared")

type GetAccountsAccountIDPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type GetAccountsAccountIDHeaders struct {
    SandboxID string `header:"style=simple,explode=false,name=sandbox-id"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetAccountsAccountIDSecurity struct {
    AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAccountsAccountIDRequest struct {
    PathParams GetAccountsAccountIDPathParams 
    Headers GetAccountsAccountIDHeaders 
    Security GetAccountsAccountIDSecurity 
    
}

type GetAccountsAccountIDResponse struct {
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadAccount5 *shared.ObReadAccount5 
    StatusCode int64 
    
}

