package operations

import (
"openapi/pkg/models/shared")

type IpamVlansUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamVlansUpdateRequest struct {
    PathParams IpamVlansUpdatePathParams 
    Request shared.WritableVlan `request:"mediaType=application/json"`
    
}

type IpamVlansUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    Vlan *shared.Vlan 
    
}

