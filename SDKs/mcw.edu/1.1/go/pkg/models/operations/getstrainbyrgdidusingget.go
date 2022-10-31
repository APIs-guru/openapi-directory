package operations

type GetStrainByRgdIDUsingGetPathParams struct {
	RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
}

type GetStrainByRgdIDUsingGetRequest struct {
	PathParams GetStrainByRgdIDUsingGetPathParams
}

type GetStrainByRgdIDUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
