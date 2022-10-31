package operations

import (
"openapi/pkg/models/shared")

type PostRealmGroupsIDRoleMappingsClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmGroupsIDRoleMappingsClientsClientRequest struct {
    PathParams PostRealmGroupsIDRoleMappingsClientsClientPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmGroupsIDRoleMappingsClientsClientResponse struct {
    ContentType string 
    StatusCode int64 
    
}

