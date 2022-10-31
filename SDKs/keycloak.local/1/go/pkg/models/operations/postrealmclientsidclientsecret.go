package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientsIDClientSecretPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientsIDClientSecretRequest struct {
    PathParams PostRealmClientsIDClientSecretPathParams 
    
}

type PostRealmClientsIDClientSecretResponse struct {
    ContentType string 
    CredentialRepresentation *shared.CredentialRepresentation 
    StatusCode int64 
    
}

