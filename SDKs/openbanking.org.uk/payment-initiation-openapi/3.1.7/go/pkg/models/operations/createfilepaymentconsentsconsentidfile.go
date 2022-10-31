package operations

import (
"openapi/pkg/models/shared")

type CreateFilePaymentConsentsConsentIDFilePathParams struct {
    ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
    
}

type CreateFilePaymentConsentsConsentIDFileHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    XIdempotencyKey string `header:"style=simple,explode=false,name=x-idempotency-key"`
    XJwsSignature string `header:"style=simple,explode=false,name=x-jws-signature"`
    
}

type CreateFilePaymentConsentsConsentIDFileRequests struct {
    ApplicationJosePlusJwe []byte `request:"mediaType=application/jose+jwe"`
    File map[string]interface{} `request:"mediaType=application/json"`
    File1 map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateFilePaymentConsentsConsentIDFileSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type CreateFilePaymentConsentsConsentIDFileRequest struct {
    PathParams CreateFilePaymentConsentsConsentIDFilePathParams 
    Headers CreateFilePaymentConsentsConsentIDFileHeaders 
    Request CreateFilePaymentConsentsConsentIDFileRequests 
    Security CreateFilePaymentConsentsConsentIDFileSecurity 
    
}

type CreateFilePaymentConsentsConsentIDFileResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    StatusCode int64 
    
}

