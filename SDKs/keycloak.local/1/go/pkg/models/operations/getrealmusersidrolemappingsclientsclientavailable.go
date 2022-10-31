package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDRoleMappingsClientsClientAvailablePathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDRoleMappingsClientsClientAvailableRequest struct {
    PathParams GetRealmUsersIDRoleMappingsClientsClientAvailablePathParams 
    
}

type GetRealmUsersIDRoleMappingsClientsClientAvailableResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

