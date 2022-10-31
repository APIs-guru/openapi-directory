package operations

import (
"openapi/pkg/models/shared")

type IpamVlansPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamVlansPartialUpdateRequest struct {
    PathParams IpamVlansPartialUpdatePathParams 
    Request shared.WritableVlan `request:"mediaType=application/json"`
    
}

type IpamVlansPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    Vlan *shared.Vlan 
    
}

