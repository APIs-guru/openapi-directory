package operations

type PostRealmClearUserCachePathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClearUserCacheRequest struct {
	PathParams PostRealmClearUserCachePathParams
}

type PostRealmClearUserCacheResponse struct {
	ContentType string
	StatusCode  int64
}
