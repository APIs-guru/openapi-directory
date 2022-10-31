package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientsInitialAccessPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientsInitialAccessRequest struct {
    PathParams PostRealmClientsInitialAccessPathParams 
    Request shared.ClientInitialAccessCreatePresentation `request:"mediaType=application/json"`
    
}

type PostRealmClientsInitialAccessResponse struct {
    ClientInitialAccessPresentation *shared.ClientInitialAccessPresentation 
    ContentType string 
    StatusCode int64 
    
}

