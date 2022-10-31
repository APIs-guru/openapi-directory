package operations

import (
"openapi/pkg/models/shared")

type SecretsSecretsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type SecretsSecretsUpdateRequest struct {
    PathParams SecretsSecretsUpdatePathParams 
    Request shared.WritableSecret `request:"mediaType=application/json"`
    
}

type SecretsSecretsUpdateResponse struct {
    ContentType string 
    Secret *shared.Secret 
    StatusCode int64 
    
}

