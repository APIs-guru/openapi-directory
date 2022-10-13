package operations

type FilesVersionDetailPathParams struct {
	FileID    string `pathParam:"style=simple,explode=false,name=file_id"`
	VersionID string `pathParam:"style=simple,explode=false,name=version_id"`
}

type FilesVersionDetailRequest struct {
	PathParams FilesVersionDetailPathParams
}

type FilesVersionDetailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
