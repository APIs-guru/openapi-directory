package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1ResourcesBlockIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1ResourcesBlockIDRequest struct {
    PathParams DeleteSetupV1ResourcesBlockIDPathParams 
    
}

type DeleteSetupV1ResourcesBlockIDResponse struct {
    ContentType string 
    ResourceBlockViewModel *shared.ResourceBlockViewModel 
    StatusCode int64 
    
}

