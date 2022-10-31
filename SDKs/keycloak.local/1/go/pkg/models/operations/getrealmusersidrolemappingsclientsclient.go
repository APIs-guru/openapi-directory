package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDRoleMappingsClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDRoleMappingsClientsClientRequest struct {
    PathParams GetRealmUsersIDRoleMappingsClientsClientPathParams 
    
}

type GetRealmUsersIDRoleMappingsClientsClientResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

