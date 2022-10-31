package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDOfflineSessionsClientIDPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDOfflineSessionsClientIDRequest struct {
    PathParams GetRealmUsersIDOfflineSessionsClientIDPathParams 
    
}

type GetRealmUsersIDOfflineSessionsClientIDResponse struct {
    ContentType string 
    StatusCode int64 
    UserSessionRepresentations []shared.UserSessionRepresentation 
    
}

