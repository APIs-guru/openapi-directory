package operations

import (
"openapi/pkg/models/shared")

type GetProtectionQueryParams struct {
    Alt *float64 `queryParam:"style=form,explode=true,name=alt"`
    From float64 `queryParam:"style=form,explode=true,name=from"`
    Lat float64 `queryParam:"style=form,explode=true,name=lat"`
    Lng float64 `queryParam:"style=form,explode=true,name=lng"`
    Ozone *float64 `queryParam:"style=form,explode=true,name=ozone"`
    To float64 `queryParam:"style=form,explode=true,name=to"`
    
}

type GetProtectionHeaders struct {
    XAccessToken string `header:"style=simple,explode=false,name=x-access-token"`
    
}

type GetProtectionRequest struct {
    QueryParams GetProtectionQueryParams 
    Headers GetProtectionHeaders 
    
}

type GetProtectionResponse struct {
    ContentType string 
    StatusCode int64 
    ProtectionResult *shared.ProtectionResult 
    
}

