package operations

import (
"openapi/pkg/models/shared")

type GetAccountAccessConsentsConsentIDPathParams struct {
    ConsentID string `pathParam:"style=simple,explode=false,name=consentId"`
    
}

type GetAccountAccessConsentsConsentIDHeaders struct {
    SandboxID string `header:"style=simple,explode=false,name=sandbox-id"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetAccountAccessConsentsConsentIDSecurity struct {
    ClientCredentialsToken shared.SchemeClientCredentialsToken `security:"scheme,type=oauth2"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAccountAccessConsentsConsentIDRequest struct {
    PathParams GetAccountAccessConsentsConsentIDPathParams 
    Headers GetAccountAccessConsentsConsentIDHeaders 
    Security GetAccountAccessConsentsConsentIDSecurity 
    
}

type GetAccountAccessConsentsConsentIDResponse struct {
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadConsentResponse1 *shared.ObReadConsentResponse1 
    StatusCode int64 
    
}

