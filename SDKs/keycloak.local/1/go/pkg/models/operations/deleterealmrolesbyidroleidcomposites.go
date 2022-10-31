package operations

import (
"openapi/pkg/models/shared")

type DeleteRealmRolesByIDRoleIDCompositesPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
    
}

type DeleteRealmRolesByIDRoleIDCompositesRequest struct {
    PathParams DeleteRealmRolesByIDRoleIDCompositesPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type DeleteRealmRolesByIDRoleIDCompositesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

