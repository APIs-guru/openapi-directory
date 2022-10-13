package operations

type GetStudiesIDMediaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudiesIDMediaQueryParams struct {
	Extended  *string `queryParam:"style=form,explode=true,name=extended"`
	Transcode *string `queryParam:"style=form,explode=true,name=transcode"`
}

type GetStudiesIDMediaRequest struct {
	PathParams  GetStudiesIDMediaPathParams
	QueryParams GetStudiesIDMediaQueryParams
}

type GetStudiesIDMediaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
