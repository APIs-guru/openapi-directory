package operations

type GetSeriesIDArchivePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSeriesIDArchiveQueryParams struct {
	Transcode *string `queryParam:"style=form,explode=true,name=transcode"`
}

type GetSeriesIDArchiveRequest struct {
	PathParams  GetSeriesIDArchivePathParams
	QueryParams GetSeriesIDArchiveQueryParams
}

type GetSeriesIDArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
