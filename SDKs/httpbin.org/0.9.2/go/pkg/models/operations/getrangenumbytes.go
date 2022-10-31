package operations

type GetRangeNumbytesPathParams struct {
	Numbytes int64 `pathParam:"style=simple,explode=false,name=numbytes"`
}

type GetRangeNumbytesRequest struct {
	PathParams GetRangeNumbytesPathParams
}

type GetRangeNumbytesResponse struct {
	ContentType string
	StatusCode  int64
}
