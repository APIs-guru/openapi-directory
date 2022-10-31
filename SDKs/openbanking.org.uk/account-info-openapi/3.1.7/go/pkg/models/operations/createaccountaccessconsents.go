package operations

import (
"openapi/pkg/models/shared")

type CreateAccountAccessConsentsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type CreateAccountAccessConsentsRequests struct {
    ApplicationJosePlusJwe []byte `request:"mediaType=application/jose+jwe"`
    ObReadConsent1 *shared.ObReadConsent1 `request:"mediaType=application/json"`
    ObReadConsent2 *shared.ObReadConsent1 `request:"mediaType=application/json"`
    
}

type CreateAccountAccessConsentsSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type CreateAccountAccessConsentsRequest struct {
    Headers CreateAccountAccessConsentsHeaders 
    Request CreateAccountAccessConsentsRequests 
    Security CreateAccountAccessConsentsSecurity 
    
}

type CreateAccountAccessConsentsResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadConsentResponse1 *shared.ObReadConsentResponse1 
    StatusCode int64 
    
}

