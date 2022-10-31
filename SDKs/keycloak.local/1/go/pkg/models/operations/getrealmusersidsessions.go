package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDSessionsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDSessionsRequest struct {
    PathParams GetRealmUsersIDSessionsPathParams 
    
}

type GetRealmUsersIDSessionsResponse struct {
    ContentType string 
    StatusCode int64 
    UserSessionRepresentations []shared.UserSessionRepresentation 
    
}

