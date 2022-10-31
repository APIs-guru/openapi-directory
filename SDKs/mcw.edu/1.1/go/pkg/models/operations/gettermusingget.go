package operations

type GetTermUsingGetPathParams struct {
	AccID string `pathParam:"style=simple,explode=false,name=accId"`
}

type GetTermUsingGetRequest struct {
	PathParams GetTermUsingGetPathParams
}

type GetTermUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
