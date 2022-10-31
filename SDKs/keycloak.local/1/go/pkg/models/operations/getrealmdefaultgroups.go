package operations

import (
"openapi/pkg/models/shared")

type GetRealmDefaultGroupsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmDefaultGroupsRequest struct {
    PathParams GetRealmDefaultGroupsPathParams 
    
}

type GetRealmDefaultGroupsResponse struct {
    ContentType string 
    GroupRepresentations []shared.GroupRepresentation 
    StatusCode int64 
    
}

