package operations

import (
"openapi/pkg/models/shared")

type PutRealmGroupsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmGroupsIDRequest struct {
    PathParams PutRealmGroupsIDPathParams 
    Request shared.GroupRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmGroupsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

