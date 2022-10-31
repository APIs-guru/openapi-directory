package operations

type GetGeneByMapKeyUsingGetPathParams struct {
	MapKey int32 `pathParam:"style=simple,explode=false,name=mapKey"`
}

type GetGeneByMapKeyUsingGetRequest struct {
	PathParams GetGeneByMapKeyUsingGetPathParams
}

type GetGeneByMapKeyUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
