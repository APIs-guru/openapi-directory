package operations

import (
"openapi/pkg/models/shared")

type GetRealmGroupsIDRoleMappingsRealmPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmGroupsIDRoleMappingsRealmRequest struct {
    PathParams GetRealmGroupsIDRoleMappingsRealmPathParams 
    
}

type GetRealmGroupsIDRoleMappingsRealmResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

