package operations

import (
"openapi/pkg/models/shared")

type GetDomesticPaymentsDomesticPaymentIDPathParams struct {
    DomesticPaymentID string `pathParam:"style=simple,explode=false,name=DomesticPaymentId"`
    
}

type GetDomesticPaymentsDomesticPaymentIDHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetDomesticPaymentsDomesticPaymentIDSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetDomesticPaymentsDomesticPaymentIDRequest struct {
    PathParams GetDomesticPaymentsDomesticPaymentIDPathParams 
    Headers GetDomesticPaymentsDomesticPaymentIDHeaders 
    Security GetDomesticPaymentsDomesticPaymentIDSecurity 
    
}

type GetDomesticPaymentsDomesticPaymentIDResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWriteDomesticResponse5 *shared.ObWriteDomesticResponse5 
    StatusCode int64 
    
}

