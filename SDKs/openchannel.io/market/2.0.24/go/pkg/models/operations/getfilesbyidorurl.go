package operations

type GetFilesByIDOrURLQueryParams struct {
	FileIDOrURL string `queryParam:"style=form,explode=true,name=fileIdOrUrl"`
}

type GetFilesByIDOrURLRequest struct {
	QueryParams GetFilesByIDOrURLQueryParams
}

type GetFilesByIDOrURLResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
