package operations

import (
"openapi/pkg/models/shared")

type IpamVrfsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamVrfsReadRequest struct {
    PathParams IpamVrfsReadPathParams 
    
}

type IpamVrfsReadResponse struct {
    ContentType string 
    StatusCode int64 
    Vrf *shared.Vrf 
    
}

