package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationDocumentPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type CreateApplicationDocumentRequest struct {
	PathParams CreateApplicationDocumentPathParams
	Request    shared.ApplicationDocumentCreateRequest `request:"mediaType=application/json"`
}

type CreateApplicationDocumentResponse struct {
	ApplicationDocumentResult *shared.ApplicationDocumentResult
	ContentType               string
	StatusCode                int64
}
