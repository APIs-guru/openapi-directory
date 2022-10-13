package operations

type GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadPathParams struct {
	DocumentID    int32 `pathParam:"style=simple,explode=false,name=documentId"`
	PublicationID int32 `pathParam:"style=simple,explode=false,name=publicationId"`
}

type GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadRequest struct {
	PathParams GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadPathParams
}

type GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
