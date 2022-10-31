package operations

type GetMgiMappingUsingGetPathParams struct {
	RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
}

type GetMgiMappingUsingGetRequest struct {
	PathParams GetMgiMappingUsingGetPathParams
}

type GetMgiMappingUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
