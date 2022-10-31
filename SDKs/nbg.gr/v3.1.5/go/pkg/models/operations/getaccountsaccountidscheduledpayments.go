package operations

import (
"openapi/pkg/models/shared")

type GetAccountsAccountIDScheduledPaymentsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type GetAccountsAccountIDScheduledPaymentsHeaders struct {
    SandboxID string `header:"style=simple,explode=false,name=sandbox-id"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetAccountsAccountIDScheduledPaymentsSecurity struct {
    AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAccountsAccountIDScheduledPaymentsRequest struct {
    PathParams GetAccountsAccountIDScheduledPaymentsPathParams 
    Headers GetAccountsAccountIDScheduledPaymentsHeaders 
    Security GetAccountsAccountIDScheduledPaymentsSecurity 
    
}

type GetAccountsAccountIDScheduledPaymentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadScheduledPayment3 *shared.ObReadScheduledPayment3 
    StatusCode int64 
    
}

