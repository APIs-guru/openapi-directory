package operations

import (
"openapi/pkg/models/shared")

type PostRealmRolesByIDRoleIDCompositesPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
    
}

type PostRealmRolesByIDRoleIDCompositesRequest struct {
    PathParams PostRealmRolesByIDRoleIDCompositesPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmRolesByIDRoleIDCompositesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

