package operations

import (
"openapi/pkg/models/shared")

type GetRealmGroupsIDRoleMappingsClientsClientAvailablePathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmGroupsIDRoleMappingsClientsClientAvailableRequest struct {
    PathParams GetRealmGroupsIDRoleMappingsClientsClientAvailablePathParams 
    
}

type GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

