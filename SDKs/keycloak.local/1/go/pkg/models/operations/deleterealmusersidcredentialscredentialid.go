package operations

type DeleteRealmUsersIDCredentialsCredentialIDPathParams struct {
	CredentialID string `pathParam:"style=simple,explode=false,name=credentialId"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	Realm        string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmUsersIDCredentialsCredentialIDRequest struct {
	PathParams DeleteRealmUsersIDCredentialsCredentialIDPathParams
}

type DeleteRealmUsersIDCredentialsCredentialIDResponse struct {
	ContentType string
	StatusCode  int64
}
