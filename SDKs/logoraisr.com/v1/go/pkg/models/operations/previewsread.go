package operations

import (
	"openapi/pkg/models/shared"
)

type PreviewsReadPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=file_id"`
}

type PreviewsReadRequest struct {
	PathParams PreviewsReadPathParams
}

type PreviewsReadResponse struct {
	ContentType     string
	PreviewResponse *shared.PreviewResponse
	StatusCode      int64
}
