package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDCredentialsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDCredentialsRequest struct {
    PathParams GetRealmUsersIDCredentialsPathParams 
    
}

type GetRealmUsersIDCredentialsResponse struct {
    ContentType string 
    CredentialRepresentations []shared.CredentialRepresentation 
    StatusCode int64 
    
}

