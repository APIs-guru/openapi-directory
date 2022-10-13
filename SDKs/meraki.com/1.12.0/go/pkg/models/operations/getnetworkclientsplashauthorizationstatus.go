package operations

type GetNetworkClientSplashAuthorizationStatusPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkClientSplashAuthorizationStatusRequest struct {
	PathParams GetNetworkClientSplashAuthorizationStatusPathParams
}

type GetNetworkClientSplashAuthorizationStatusResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	GetNetworkClientSplashAuthorizationStatus200ApplicationJSONObject map[string]interface{}
}
