package operations

import (
"openapi/pkg/models/shared")

type IpamPrefixesAvailableIpsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamPrefixesAvailableIpsReadRequest struct {
    PathParams IpamPrefixesAvailableIpsReadPathParams 
    
}

type IpamPrefixesAvailableIpsReadResponse struct {
    AvailableIps []shared.AvailableIP 
    ContentType string 
    StatusCode int64 
    
}

