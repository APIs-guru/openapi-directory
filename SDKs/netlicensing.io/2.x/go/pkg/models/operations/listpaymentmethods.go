package operations

import (
"openapi/pkg/models/shared")

type ListPaymentMethodsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ListPaymentMethodsRequest struct {
    Security ListPaymentMethodsSecurity 
    
}

type ListPaymentMethodsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensings []interface{} 
    
}

