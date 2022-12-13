package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationDocumentPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	DocumentID    string `pathParam:"style=simple,explode=false,name=document_id"`
}

type GetApplicationDocumentRequest struct {
	PathParams GetApplicationDocumentPathParams
}

type GetApplicationDocumentResponse struct {
	ApplicationDocumentResult *shared.ApplicationDocumentResult
	ContentType               string
	StatusCode                int64
}
