package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDRolesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDRolesQueryParams struct {
    BriefRepresentation *bool `queryParam:"style=form,explode=true,name=briefRepresentation"`
    First *int32 `queryParam:"style=form,explode=true,name=first"`
    Max *int32 `queryParam:"style=form,explode=true,name=max"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type GetRealmClientsIDRolesRequest struct {
    PathParams GetRealmClientsIDRolesPathParams 
    QueryParams GetRealmClientsIDRolesQueryParams 
    
}

type GetRealmClientsIDRolesResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

