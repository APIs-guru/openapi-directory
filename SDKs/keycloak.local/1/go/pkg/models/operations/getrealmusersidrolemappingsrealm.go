package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDRoleMappingsRealmPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDRoleMappingsRealmRequest struct {
    PathParams GetRealmUsersIDRoleMappingsRealmPathParams 
    
}

type GetRealmUsersIDRoleMappingsRealmResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

