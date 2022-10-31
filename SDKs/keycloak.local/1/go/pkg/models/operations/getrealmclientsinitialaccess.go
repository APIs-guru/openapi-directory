package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsInitialAccessPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsInitialAccessRequest struct {
    PathParams GetRealmClientsInitialAccessPathParams 
    
}

type GetRealmClientsInitialAccessResponse struct {
    ClientInitialAccessPresentations []shared.ClientInitialAccessPresentation 
    ContentType string 
    StatusCode int64 
    
}

