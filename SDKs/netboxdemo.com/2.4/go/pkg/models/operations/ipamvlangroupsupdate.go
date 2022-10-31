package operations

import (
"openapi/pkg/models/shared")

type IpamVlanGroupsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamVlanGroupsUpdateRequest struct {
    PathParams IpamVlanGroupsUpdatePathParams 
    Request shared.WritableVlanGroup `request:"mediaType=application/json"`
    
}

type IpamVlanGroupsUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    VlanGroup *shared.VlanGroup 
    
}

