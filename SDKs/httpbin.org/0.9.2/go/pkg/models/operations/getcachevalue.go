package operations

type GetCacheValuePathParams struct {
	Value int64 `pathParam:"style=simple,explode=false,name=value"`
}

type GetCacheValueRequest struct {
	PathParams GetCacheValuePathParams
}

type GetCacheValueResponse struct {
	ContentType string
	StatusCode  int64
}
