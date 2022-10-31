package operations

import (
"openapi/pkg/models/shared")

type ExtrasConfigContextsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasConfigContextsPartialUpdateRequest struct {
    PathParams ExtrasConfigContextsPartialUpdatePathParams 
    Request shared.WritableConfigContext `request:"mediaType=application/json"`
    
}

type ExtrasConfigContextsPartialUpdateResponse struct {
    ConfigContext *shared.ConfigContext 
    ContentType string 
    StatusCode int64 
    
}

