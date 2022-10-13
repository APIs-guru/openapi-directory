package operations

type GetSeriesIDMediaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSeriesIDMediaQueryParams struct {
	Extended  *string `queryParam:"style=form,explode=true,name=extended"`
	Transcode *string `queryParam:"style=form,explode=true,name=transcode"`
}

type GetSeriesIDMediaRequest struct {
	PathParams  GetSeriesIDMediaPathParams
	QueryParams GetSeriesIDMediaQueryParams
}

type GetSeriesIDMediaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
