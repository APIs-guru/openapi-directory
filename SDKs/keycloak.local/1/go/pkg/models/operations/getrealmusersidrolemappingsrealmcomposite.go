package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDRoleMappingsRealmCompositePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDRoleMappingsRealmCompositeRequest struct {
    PathParams GetRealmUsersIDRoleMappingsRealmCompositePathParams 
    
}

type GetRealmUsersIDRoleMappingsRealmCompositeResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

