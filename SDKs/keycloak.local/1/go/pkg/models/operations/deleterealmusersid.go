package operations

type DeleteRealmUsersIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmUsersIDRequest struct {
	PathParams DeleteRealmUsersIDPathParams
}

type DeleteRealmUsersIDResponse struct {
	ContentType string
	StatusCode  int64
}
