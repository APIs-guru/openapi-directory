package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDGroupsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDGroupsQueryParams struct {
    BriefRepresentation *bool `queryParam:"style=form,explode=true,name=briefRepresentation"`
    First *int32 `queryParam:"style=form,explode=true,name=first"`
    Max *int32 `queryParam:"style=form,explode=true,name=max"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type GetRealmUsersIDGroupsRequest struct {
    PathParams GetRealmUsersIDGroupsPathParams 
    QueryParams GetRealmUsersIDGroupsQueryParams 
    
}

type GetRealmUsersIDGroupsResponse struct {
    ContentType string 
    GroupRepresentations []shared.GroupRepresentation 
    StatusCode int64 
    
}

