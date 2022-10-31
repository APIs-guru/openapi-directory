package operations

type GetCookiesSetNameValuePathParams struct {
	Name  string `pathParam:"style=simple,explode=false,name=name"`
	Value string `pathParam:"style=simple,explode=false,name=value"`
}

type GetCookiesSetNameValueRequest struct {
	PathParams GetCookiesSetNameValuePathParams
}

type GetCookiesSetNameValueResponse struct {
	ContentType string
	StatusCode  int64
}
