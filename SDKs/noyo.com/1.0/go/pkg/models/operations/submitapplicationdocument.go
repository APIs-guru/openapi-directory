package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitApplicationDocumentPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	DocumentID    string `pathParam:"style=simple,explode=false,name=document_id"`
	Version       string `pathParam:"style=simple,explode=false,name=version"`
}

type SubmitApplicationDocumentRequest struct {
	PathParams SubmitApplicationDocumentPathParams
	Request    shared.ApplicationDocumentEditRequest `request:"mediaType=application/json"`
}

type SubmitApplicationDocumentResponse struct {
	ApplicationDocumentResult *shared.ApplicationDocumentResult
	ContentType               string
	StatusCode                int64
}
