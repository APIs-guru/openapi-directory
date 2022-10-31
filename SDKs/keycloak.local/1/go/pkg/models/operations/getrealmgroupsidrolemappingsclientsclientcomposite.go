package operations

import (
"openapi/pkg/models/shared")

type GetRealmGroupsIDRoleMappingsClientsClientCompositePathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmGroupsIDRoleMappingsClientsClientCompositeRequest struct {
    PathParams GetRealmGroupsIDRoleMappingsClientsClientCompositePathParams 
    
}

type GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

