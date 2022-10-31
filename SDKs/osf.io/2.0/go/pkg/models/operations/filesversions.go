package operations

type FilesVersionsPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=file_id"`
}

type FilesVersionsRequest struct {
	PathParams FilesVersionsPathParams
}

type FilesVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
