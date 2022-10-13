package operations

type GetGeneAllelesUsingGetPathParams struct {
	RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
}

type GetGeneAllelesUsingGetRequest struct {
	PathParams GetGeneAllelesUsingGetPathParams
}

type GetGeneAllelesUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
