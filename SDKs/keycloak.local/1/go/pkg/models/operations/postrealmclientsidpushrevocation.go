package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientsIDPushRevocationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientsIDPushRevocationRequest struct {
    PathParams PostRealmClientsIDPushRevocationPathParams 
    
}

type PostRealmClientsIDPushRevocationResponse struct {
    ContentType string 
    GlobalRequestResult *shared.GlobalRequestResult 
    StatusCode int64 
    
}

