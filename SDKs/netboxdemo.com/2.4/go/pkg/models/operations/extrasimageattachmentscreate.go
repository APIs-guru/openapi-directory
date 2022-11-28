package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasImageAttachmentsCreateRequest struct {
	Request shared.ImageAttachmentInput `request:"mediaType=application/json"`
}

type ExtrasImageAttachmentsCreateResponse struct {
	ContentType     string
	ImageAttachment *shared.ImageAttachment
	StatusCode      int64
}
