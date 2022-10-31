package operations

import (
"openapi/pkg/models/shared")

type GetRealmRolesByIDRoleIDCompositesClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
    
}

type GetRealmRolesByIDRoleIDCompositesClientsClientRequest struct {
    PathParams GetRealmRolesByIDRoleIDCompositesClientsClientPathParams 
    
}

type GetRealmRolesByIDRoleIDCompositesClientsClientResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

