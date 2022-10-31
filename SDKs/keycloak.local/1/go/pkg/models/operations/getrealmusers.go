package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersQueryParams struct {
    BriefRepresentation *bool `queryParam:"style=form,explode=true,name=briefRepresentation"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    First *int32 `queryParam:"style=form,explode=true,name=first"`
    FirstName *string `queryParam:"style=form,explode=true,name=firstName"`
    LastName *string `queryParam:"style=form,explode=true,name=lastName"`
    Max *int32 `queryParam:"style=form,explode=true,name=max"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Username *string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetRealmUsersRequest struct {
    PathParams GetRealmUsersPathParams 
    QueryParams GetRealmUsersQueryParams 
    
}

type GetRealmUsersResponse struct {
    ContentType string 
    StatusCode int64 
    UserRepresentations []shared.UserRepresentation 
    
}

