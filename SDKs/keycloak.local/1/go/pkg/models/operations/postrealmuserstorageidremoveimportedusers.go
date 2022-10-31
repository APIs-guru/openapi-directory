package operations

type PostRealmUserStorageIDRemoveImportedUsersPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUserStorageIDRemoveImportedUsersRequest struct {
	PathParams PostRealmUserStorageIDRemoveImportedUsersPathParams
}

type PostRealmUserStorageIDRemoveImportedUsersResponse struct {
	ContentType string
	StatusCode  int64
}
