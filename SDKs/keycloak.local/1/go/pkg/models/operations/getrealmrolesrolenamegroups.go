package operations

import (
"openapi/pkg/models/shared")

type GetRealmRolesRoleNameGroupsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type GetRealmRolesRoleNameGroupsQueryParams struct {
    BriefRepresentation *bool `queryParam:"style=form,explode=true,name=briefRepresentation"`
    First *int32 `queryParam:"style=form,explode=true,name=first"`
    Max *int32 `queryParam:"style=form,explode=true,name=max"`
    
}

type GetRealmRolesRoleNameGroupsRequest struct {
    PathParams GetRealmRolesRoleNameGroupsPathParams 
    QueryParams GetRealmRolesRoleNameGroupsQueryParams 
    
}

type GetRealmRolesRoleNameGroupsResponse struct {
    ContentType string 
    GroupRepresentations []shared.GroupRepresentation 
    StatusCode int64 
    
}

