package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1PublicationsPublicationIDDocumentsDocumentIDPathParams struct {
	DocumentID    int32 `pathParam:"style=simple,explode=false,name=documentId"`
	PublicationID int32 `pathParam:"style=simple,explode=false,name=publicationId"`
}

type GetAPIV1PublicationsPublicationIDDocumentsDocumentIDRequest struct {
	PathParams GetAPIV1PublicationsPublicationIDDocumentsDocumentIDPathParams
}

type GetAPIV1PublicationsPublicationIDDocumentsDocumentIDResponse struct {
	Body                []byte
	ContentType         string
	ProblemDetails      map[string]interface{}
	PublicationDocument *shared.PublicationDocument
	StatusCode          int64
}
