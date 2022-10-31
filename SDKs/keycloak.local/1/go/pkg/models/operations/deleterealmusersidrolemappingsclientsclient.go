package operations

import (
"openapi/pkg/models/shared")

type DeleteRealmUsersIDRoleMappingsClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmUsersIDRoleMappingsClientsClientRequest struct {
    PathParams DeleteRealmUsersIDRoleMappingsClientsClientPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type DeleteRealmUsersIDRoleMappingsClientsClientResponse struct {
    ContentType string 
    StatusCode int64 
    
}

