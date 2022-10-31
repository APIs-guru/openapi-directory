package operations

import (
"openapi/pkg/models/shared")

type SecretsSecretRolesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type SecretsSecretRolesReadRequest struct {
    PathParams SecretsSecretRolesReadPathParams 
    
}

type SecretsSecretRolesReadResponse struct {
    ContentType string 
    SecretRole *shared.SecretRole 
    StatusCode int64 
    
}

