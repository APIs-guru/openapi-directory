package operations

type GetNetworkMerakiAuthUserPathParams struct {
	MerakiAuthUserID string `pathParam:"style=simple,explode=false,name=merakiAuthUserId"`
	NetworkID        string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkMerakiAuthUserRequest struct {
	PathParams GetNetworkMerakiAuthUserPathParams
}

type GetNetworkMerakiAuthUserResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetNetworkMerakiAuthUser200ApplicationJSONObject map[string]interface{}
}
