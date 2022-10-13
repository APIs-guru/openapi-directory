package operations

type PostRealmPushRevocationPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmPushRevocationRequest struct {
	PathParams PostRealmPushRevocationPathParams
}

type PostRealmPushRevocationResponse struct {
	ContentType string
	StatusCode  int64
}
