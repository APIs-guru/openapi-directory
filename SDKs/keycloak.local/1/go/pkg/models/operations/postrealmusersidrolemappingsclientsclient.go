package operations

import (
"openapi/pkg/models/shared")

type PostRealmUsersIDRoleMappingsClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmUsersIDRoleMappingsClientsClientRequest struct {
    PathParams PostRealmUsersIDRoleMappingsClientsClientPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmUsersIDRoleMappingsClientsClientResponse struct {
    ContentType string 
    StatusCode int64 
    
}

