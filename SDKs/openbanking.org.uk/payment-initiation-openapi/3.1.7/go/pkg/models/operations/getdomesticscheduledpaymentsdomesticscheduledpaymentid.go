package operations

import (
"openapi/pkg/models/shared")

type GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPathParams struct {
    DomesticScheduledPaymentID string `pathParam:"style=simple,explode=false,name=DomesticScheduledPaymentId"`
    
}

type GetDomesticScheduledPaymentsDomesticScheduledPaymentIDHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetDomesticScheduledPaymentsDomesticScheduledPaymentIDSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetDomesticScheduledPaymentsDomesticScheduledPaymentIDRequest struct {
    PathParams GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPathParams 
    Headers GetDomesticScheduledPaymentsDomesticScheduledPaymentIDHeaders 
    Security GetDomesticScheduledPaymentsDomesticScheduledPaymentIDSecurity 
    
}

type GetDomesticScheduledPaymentsDomesticScheduledPaymentIDResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWriteDomesticScheduledResponse5 *shared.ObWriteDomesticScheduledResponse5 
    StatusCode int64 
    
}

