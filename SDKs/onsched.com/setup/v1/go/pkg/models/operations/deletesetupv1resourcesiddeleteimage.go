package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1ResourcesIDDeleteimagePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1ResourcesIDDeleteimageRequest struct {
    PathParams DeleteSetupV1ResourcesIDDeleteimagePathParams 
    
}

type DeleteSetupV1ResourcesIDDeleteimageResponse struct {
    ContentType string 
    ResourceViewModel *shared.ResourceViewModel 
    StatusCode int64 
    
}

