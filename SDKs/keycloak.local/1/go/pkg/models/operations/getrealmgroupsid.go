package operations

import (
"openapi/pkg/models/shared")

type GetRealmGroupsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmGroupsIDRequest struct {
    PathParams GetRealmGroupsIDPathParams 
    
}

type GetRealmGroupsIDResponse struct {
    ContentType string 
    GroupRepresentation *shared.GroupRepresentation 
    StatusCode int64 
    
}

