package operations

type GetHgncMappingUsingGetPathParams struct {
	RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
}

type GetHgncMappingUsingGetRequest struct {
	PathParams GetHgncMappingUsingGetPathParams
}

type GetHgncMappingUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
