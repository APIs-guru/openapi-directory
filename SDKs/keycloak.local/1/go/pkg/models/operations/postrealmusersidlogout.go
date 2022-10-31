package operations

type PostRealmUsersIDLogoutPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUsersIDLogoutRequest struct {
	PathParams PostRealmUsersIDLogoutPathParams
}

type PostRealmUsersIDLogoutResponse struct {
	ContentType string
	StatusCode  int64
}
