package operations

import (
"openapi/pkg/models/shared")

type CircuitsProvidersPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type CircuitsProvidersPartialUpdateRequest struct {
    PathParams CircuitsProvidersPartialUpdatePathParams 
    Request shared.Provider `request:"mediaType=application/json"`
    
}

type CircuitsProvidersPartialUpdateResponse struct {
    ContentType string 
    Provider *shared.Provider 
    StatusCode int64 
    
}

