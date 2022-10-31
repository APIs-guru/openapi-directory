package operations

import (
"openapi/pkg/models/shared")

type GetRealmGroupsIDRoleMappingsRealmAvailablePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmGroupsIDRoleMappingsRealmAvailableRequest struct {
    PathParams GetRealmGroupsIDRoleMappingsRealmAvailablePathParams 
    
}

type GetRealmGroupsIDRoleMappingsRealmAvailableResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

