package operations

type GetFilesDownloadQueryParams struct {
	FileID       string `queryParam:"style=form,explode=true,name=fileId"`
	ValidSeconds *int64 `queryParam:"style=form,explode=true,name=validSeconds"`
}

type GetFilesDownloadRequest struct {
	QueryParams GetFilesDownloadQueryParams
}

type GetFilesDownloadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
