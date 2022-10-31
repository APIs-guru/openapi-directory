package operations

import (
"openapi/pkg/models/shared")

type PostRealmGroupsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmGroupsRequest struct {
    PathParams PostRealmGroupsPathParams 
    Request shared.GroupRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmGroupsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

