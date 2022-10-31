package operations

import (
"openapi/pkg/models/shared")

type CreateDomesticScheduledPaymentsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    XIdempotencyKey string `header:"style=simple,explode=false,name=x-idempotency-key"`
    XJwsSignature string `header:"style=simple,explode=false,name=x-jws-signature"`
    
}

type CreateDomesticScheduledPaymentsRequests struct {
    ApplicationJosePlusJwe []byte `request:"mediaType=application/jose+jwe"`
    ObWriteDomesticScheduled2 *shared.ObWriteDomesticScheduled2 `request:"mediaType=application/json"`
    ObWriteDomesticScheduled3 *shared.ObWriteDomesticScheduled2 `request:"mediaType=application/json"`
    
}

type CreateDomesticScheduledPaymentsSecurity struct {
    PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
    
}

type CreateDomesticScheduledPaymentsRequest struct {
    Headers CreateDomesticScheduledPaymentsHeaders 
    Request CreateDomesticScheduledPaymentsRequests 
    Security CreateDomesticScheduledPaymentsSecurity 
    
}

type CreateDomesticScheduledPaymentsResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWriteDomesticScheduledResponse5 *shared.ObWriteDomesticScheduledResponse5 
    StatusCode int64 
    
}

