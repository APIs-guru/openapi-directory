package operations

type SecretsSecretRolesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SecretsSecretRolesDeleteRequest struct {
	PathParams SecretsSecretRolesDeletePathParams
}

type SecretsSecretRolesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
