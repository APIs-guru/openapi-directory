package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasImageAttachmentsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasImageAttachmentsPartialUpdateRequest struct {
	PathParams ExtrasImageAttachmentsPartialUpdatePathParams
	Request    shared.ImageAttachment `request:"mediaType=application/json"`
}

type ExtrasImageAttachmentsPartialUpdateResponse struct {
	ContentType     string
	ImageAttachment *shared.ImageAttachment
	StatusCode      int64
}
