package operations

type PostRealmUsersIDCredentialsCredentialIDMoveToFirstPathParams struct {
	CredentialID string `pathParam:"style=simple,explode=false,name=credentialId"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	Realm        string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUsersIDCredentialsCredentialIDMoveToFirstRequest struct {
	PathParams PostRealmUsersIDCredentialsCredentialIDMoveToFirstPathParams
}

type PostRealmUsersIDCredentialsCredentialIDMoveToFirstResponse struct {
	ContentType string
	StatusCode  int64
}
