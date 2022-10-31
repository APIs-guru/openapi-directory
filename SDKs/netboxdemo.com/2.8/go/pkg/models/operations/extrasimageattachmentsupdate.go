package operations

import (
"openapi/pkg/models/shared")

type ExtrasImageAttachmentsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasImageAttachmentsUpdateRequest struct {
    PathParams ExtrasImageAttachmentsUpdatePathParams 
    Request shared.ImageAttachment `request:"mediaType=application/json"`
    
}

type ExtrasImageAttachmentsUpdateResponse struct {
    ContentType string 
    ImageAttachment *shared.ImageAttachment 
    StatusCode int64 
    
}

