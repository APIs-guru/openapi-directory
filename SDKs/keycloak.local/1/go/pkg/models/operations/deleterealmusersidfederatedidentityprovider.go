package operations

type DeleteRealmUsersIDFederatedIdentityProviderPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmUsersIDFederatedIdentityProviderRequest struct {
	PathParams DeleteRealmUsersIDFederatedIdentityProviderPathParams
}

type DeleteRealmUsersIDFederatedIdentityProviderResponse struct {
	ContentType string
	StatusCode  int64
}
