package operations

import (
"openapi/pkg/models/shared")

type TestnetGetAddressPathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    
}

type TestnetGetAddressRequest struct {
    PathParams TestnetGetAddressPathParams 
    
}

type TestnetGetAddressResponse struct {
    ContentType string 
    StatusCode int64 
    GetAddressResponse *shared.GetAddressResponse 
    
}

