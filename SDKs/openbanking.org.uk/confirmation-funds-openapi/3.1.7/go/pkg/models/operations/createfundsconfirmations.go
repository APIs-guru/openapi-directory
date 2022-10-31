package operations

import (
"openapi/pkg/models/shared")

type CreateFundsConfirmationsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type CreateFundsConfirmationsSecurity struct {
    PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
    
}

type CreateFundsConfirmationsRequest struct {
    Headers CreateFundsConfirmationsHeaders 
    Request shared.ObFundsConfirmation1 `request:"mediaType=application/json"`
    Security CreateFundsConfirmationsSecurity 
    
}

type CreateFundsConfirmationsResponse struct {
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObFundsConfirmationResponse1 *shared.ObFundsConfirmationResponse1 
    StatusCode int64 
    
}

