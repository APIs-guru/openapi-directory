package operations

import (
"openapi/pkg/models/shared")

type GetPaymentMethodPathParams struct {
    PaymentMethodNumber string `pathParam:"style=simple,explode=false,name=paymentMethodNumber"`
    
}

type GetPaymentMethodSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetPaymentMethodRequest struct {
    PathParams GetPaymentMethodPathParams 
    Security GetPaymentMethodSecurity 
    
}

type GetPaymentMethodResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

