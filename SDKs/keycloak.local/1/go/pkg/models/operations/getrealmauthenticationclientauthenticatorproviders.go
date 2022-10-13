package operations

type GetRealmAuthenticationClientAuthenticatorProvidersPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationClientAuthenticatorProvidersRequest struct {
	PathParams GetRealmAuthenticationClientAuthenticatorProvidersPathParams
}

type GetRealmAuthenticationClientAuthenticatorProvidersResponse struct {
	ContentType                                                                 string
	GetRealmAuthenticationClientAuthenticatorProviders2XxApplicationJSONObjects []map[string]interface{}
	StatusCode                                                                  int64
}
