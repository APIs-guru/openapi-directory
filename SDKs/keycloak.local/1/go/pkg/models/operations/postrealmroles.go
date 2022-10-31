package operations

import (
"openapi/pkg/models/shared")

type PostRealmRolesPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmRolesRequest struct {
    PathParams PostRealmRolesPathParams 
    Request shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmRolesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

