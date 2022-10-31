package operations

import (
"openapi/pkg/models/shared")

type ProductNumberPathParams struct {
    ProductNumber string `pathParam:"style=simple,explode=false,name=productNumber"`
    
}

type ProductNumberSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ProductNumberRequest struct {
    PathParams ProductNumberPathParams 
    Security ProductNumberSecurity 
    
}

type ProductNumberResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

