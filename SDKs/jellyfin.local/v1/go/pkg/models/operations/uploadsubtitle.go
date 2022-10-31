package operations

import (
"openapi/pkg/models/shared")

type UploadSubtitlePathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type UploadSubtitleRequests struct {
    UploadSubtitleDto *shared.UploadSubtitleDto `request:"mediaType=application/*+json"`
    UploadSubtitleDto1 *shared.UploadSubtitleDto `request:"mediaType=application/json"`
    UploadSubtitleDto2 *shared.UploadSubtitleDto `request:"mediaType=text/json"`
    
}

type UploadSubtitleRequest struct {
    PathParams UploadSubtitlePathParams 
    Request UploadSubtitleRequests 
    
}

type UploadSubtitleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

