package operations

type CreateNetworkMerakiAuthUserPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum string

const (
	CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumGuest                CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum = "Guest"
	CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumEightHundredAndTwo1X CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum = "802.1X"
	CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumClientVpn            CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum = "Client VPN"
)

type CreateNetworkMerakiAuthUserRequestBodyAuthorizations struct {
	ExpiresAt  *string `json:"expiresAt,omitempty"`
	SsidNumber *int64  `json:"ssidNumber,omitempty"`
}

type CreateNetworkMerakiAuthUserRequestBody struct {
	AccountType         *CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum `json:"accountType,omitempty"`
	Authorizations      []CreateNetworkMerakiAuthUserRequestBodyAuthorizations `json:"authorizations"`
	Email               string                                                 `json:"email"`
	EmailPasswordToUser *bool                                                  `json:"emailPasswordToUser,omitempty"`
	Name                string                                                 `json:"name"`
	Password            string                                                 `json:"password"`
}

type CreateNetworkMerakiAuthUserRequest struct {
	PathParams CreateNetworkMerakiAuthUserPathParams
	Request    CreateNetworkMerakiAuthUserRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkMerakiAuthUserResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	CreateNetworkMerakiAuthUser201ApplicationJSONObject map[string]interface{}
}
