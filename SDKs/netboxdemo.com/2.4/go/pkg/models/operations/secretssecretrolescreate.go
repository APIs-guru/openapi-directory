package operations

import (
"openapi/pkg/models/shared")

type SecretsSecretRolesCreateRequest struct {
    Request shared.SecretRole `request:"mediaType=application/json"`
    
}

type SecretsSecretRolesCreateResponse struct {
    ContentType string 
    SecretRole *shared.SecretRole 
    StatusCode int64 
    
}

