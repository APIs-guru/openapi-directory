package operations

type GetRealmUsersIDConsentsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmUsersIDConsentsRequest struct {
	PathParams GetRealmUsersIDConsentsPathParams
}

type GetRealmUsersIDConsentsResponse struct {
	ContentType                                      string
	GetRealmUsersIDConsents2XxApplicationJSONObjects []map[string]interface{}
	StatusCode                                       int64
}
