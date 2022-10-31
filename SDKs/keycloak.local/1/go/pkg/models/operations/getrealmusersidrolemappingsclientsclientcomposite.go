package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDRoleMappingsClientsClientCompositePathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDRoleMappingsClientsClientCompositeRequest struct {
    PathParams GetRealmUsersIDRoleMappingsClientsClientCompositePathParams 
    
}

type GetRealmUsersIDRoleMappingsClientsClientCompositeResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

