package operations

type UpdateNetworkMerakiAuthUserPathParams struct {
	MerakiAuthUserID string `pathParam:"style=simple,explode=false,name=merakiAuthUserId"`
	NetworkID        string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkMerakiAuthUserRequestBodyAuthorizations struct {
	ExpiresAt  *string `json:"expiresAt"`
	SsidNumber int64   `json:"ssidNumber"`
}

type UpdateNetworkMerakiAuthUserRequestBody struct {
	Authorizations      []UpdateNetworkMerakiAuthUserRequestBodyAuthorizations `json:"authorizations"`
	EmailPasswordToUser *bool                                                  `json:"emailPasswordToUser"`
	Name                *string                                                `json:"name"`
	Password            *string                                                `json:"password"`
}

type UpdateNetworkMerakiAuthUserRequest struct {
	PathParams UpdateNetworkMerakiAuthUserPathParams
	Request    *UpdateNetworkMerakiAuthUserRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkMerakiAuthUserResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	UpdateNetworkMerakiAuthUser200ApplicationJSONObject map[string]interface{}
}
