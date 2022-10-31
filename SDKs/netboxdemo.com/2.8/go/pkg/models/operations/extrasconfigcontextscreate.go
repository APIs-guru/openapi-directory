package operations

import (
"openapi/pkg/models/shared")

type ExtrasConfigContextsCreateRequest struct {
    Request shared.WritableConfigContext `request:"mediaType=application/json"`
    
}

type ExtrasConfigContextsCreateResponse struct {
    ConfigContext *shared.ConfigContext 
    ContentType string 
    StatusCode int64 
    
}

