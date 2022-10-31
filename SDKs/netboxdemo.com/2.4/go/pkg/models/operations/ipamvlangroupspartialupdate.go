package operations

import (
"openapi/pkg/models/shared")

type IpamVlanGroupsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamVlanGroupsPartialUpdateRequest struct {
    PathParams IpamVlanGroupsPartialUpdatePathParams 
    Request shared.WritableVlanGroup `request:"mediaType=application/json"`
    
}

type IpamVlanGroupsPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    VlanGroup *shared.VlanGroup 
    
}

