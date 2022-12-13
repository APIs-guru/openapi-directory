package operations

import (
	"openapi/pkg/models/shared"
)

type EditApplicationDocumentPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	DocumentID    string `pathParam:"style=simple,explode=false,name=document_id"`
	Version       string `pathParam:"style=simple,explode=false,name=version"`
}

type EditApplicationDocumentRequest struct {
	PathParams EditApplicationDocumentPathParams
	Request    shared.ApplicationDocumentEditRequest `request:"mediaType=application/json"`
}

type EditApplicationDocumentResponse struct {
	ApplicationDocumentResult *shared.ApplicationDocumentResult
	ContentType               string
	StatusCode                int64
}
