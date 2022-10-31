package operations

import (
"openapi/pkg/models/shared")

type CreateFundsConfirmationConsentsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type CreateFundsConfirmationConsentsSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type CreateFundsConfirmationConsentsRequest struct {
    Headers CreateFundsConfirmationConsentsHeaders 
    Request shared.ObFundsConfirmationConsent1 `request:"mediaType=application/json"`
    Security CreateFundsConfirmationConsentsSecurity 
    
}

type CreateFundsConfirmationConsentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObFundsConfirmationConsentResponse1 *shared.ObFundsConfirmationConsentResponse1 
    StatusCode int64 
    
}

