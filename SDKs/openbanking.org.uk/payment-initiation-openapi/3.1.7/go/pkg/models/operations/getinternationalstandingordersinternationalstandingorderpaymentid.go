package operations

import (
"openapi/pkg/models/shared")

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPathParams struct {
    InternationalStandingOrderPaymentID string `pathParam:"style=simple,explode=false,name=InternationalStandingOrderPaymentId"`
    
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDRequest struct {
    PathParams GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPathParams 
    Headers GetInternationalStandingOrdersInternationalStandingOrderPaymentIDHeaders 
    Security GetInternationalStandingOrdersInternationalStandingOrderPaymentIDSecurity 
    
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWriteInternationalStandingOrderResponse7 *shared.ObWriteInternationalStandingOrderResponse7 
    StatusCode int64 
    
}

