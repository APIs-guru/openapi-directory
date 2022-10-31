package operations

type GetStudiesIDArchivePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudiesIDArchiveQueryParams struct {
	Transcode *string `queryParam:"style=form,explode=true,name=transcode"`
}

type GetStudiesIDArchiveRequest struct {
	PathParams  GetStudiesIDArchivePathParams
	QueryParams GetStudiesIDArchiveQueryParams
}

type GetStudiesIDArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
