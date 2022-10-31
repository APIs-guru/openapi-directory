package operations

import (
"openapi/pkg/models/shared")

type ExtrasImageAttachmentsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasImageAttachmentsReadRequest struct {
    PathParams ExtrasImageAttachmentsReadPathParams 
    
}

type ExtrasImageAttachmentsReadResponse struct {
    ContentType string 
    ImageAttachment *shared.ImageAttachment 
    StatusCode int64 
    
}

