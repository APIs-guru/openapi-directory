package operations

import (
"openapi/pkg/models/shared")

type IpamPrefixesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamPrefixesReadRequest struct {
    PathParams IpamPrefixesReadPathParams 
    
}

type IpamPrefixesReadResponse struct {
    ContentType string 
    Prefix *shared.Prefix 
    StatusCode int64 
    
}

