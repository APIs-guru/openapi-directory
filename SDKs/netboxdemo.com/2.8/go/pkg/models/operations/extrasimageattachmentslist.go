package operations

import (
"openapi/pkg/models/shared")

type ExtrasImageAttachmentsListQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type ExtrasImageAttachmentsListRequest struct {
    QueryParams ExtrasImageAttachmentsListQueryParams 
    
}

type ExtrasImageAttachmentsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.ImageAttachment `json:"results"`
    
}

type ExtrasImageAttachmentsListResponse struct {
    ContentType string 
    StatusCode int64 
    ExtrasImageAttachmentsList200ApplicationJSONObject *ExtrasImageAttachmentsList200ApplicationJSON 
    
}

