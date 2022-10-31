package operations

import (
"openapi/pkg/models/shared")

type DcimPlatformsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPlatformsPartialUpdateRequest struct {
    PathParams DcimPlatformsPartialUpdatePathParams 
    Request shared.WritablePlatform `request:"mediaType=application/json"`
    
}

type DcimPlatformsPartialUpdateResponse struct {
    ContentType string 
    Platform *shared.Platform 
    StatusCode int64 
    
}

