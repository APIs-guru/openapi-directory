package operations

type GetPatientsIDMediaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDMediaQueryParams struct {
	Extended  *string `queryParam:"style=form,explode=true,name=extended"`
	Transcode *string `queryParam:"style=form,explode=true,name=transcode"`
}

type GetPatientsIDMediaRequest struct {
	PathParams  GetPatientsIDMediaPathParams
	QueryParams GetPatientsIDMediaQueryParams
}

type GetPatientsIDMediaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
