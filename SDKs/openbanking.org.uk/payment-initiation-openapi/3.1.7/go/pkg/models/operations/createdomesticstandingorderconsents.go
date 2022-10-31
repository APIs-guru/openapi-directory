package operations

import (
"openapi/pkg/models/shared")

type CreateDomesticStandingOrderConsentsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    XIdempotencyKey string `header:"style=simple,explode=false,name=x-idempotency-key"`
    XJwsSignature string `header:"style=simple,explode=false,name=x-jws-signature"`
    
}

type CreateDomesticStandingOrderConsentsRequests struct {
    ApplicationJosePlusJwe []byte `request:"mediaType=application/jose+jwe"`
    ObWriteDomesticStandingOrderConsent5 *shared.ObWriteDomesticStandingOrderConsent5 `request:"mediaType=application/json"`
    ObWriteDomesticStandingOrderConsent6 *shared.ObWriteDomesticStandingOrderConsent5 `request:"mediaType=application/json"`
    
}

type CreateDomesticStandingOrderConsentsSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type CreateDomesticStandingOrderConsentsRequest struct {
    Headers CreateDomesticStandingOrderConsentsHeaders 
    Request CreateDomesticStandingOrderConsentsRequests 
    Security CreateDomesticStandingOrderConsentsSecurity 
    
}

type CreateDomesticStandingOrderConsentsResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWriteDomesticStandingOrderConsentResponse6 *shared.ObWriteDomesticStandingOrderConsentResponse6 
    StatusCode int64 
    
}

