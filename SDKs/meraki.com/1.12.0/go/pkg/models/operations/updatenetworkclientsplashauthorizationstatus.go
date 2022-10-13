package operations

type UpdateNetworkClientSplashAuthorizationStatusPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9 struct {
	IsAuthorized *bool `json:"isAuthorized"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids struct {
	Zero     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0  `json:"0"`
	One      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1  `json:"1"`
	Ten      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 `json:"10"`
	Eleven   *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 `json:"11"`
	Twelve   *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 `json:"12"`
	Thirteen *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 `json:"13"`
	Fourteen *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 `json:"14"`
	Two      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2  `json:"2"`
	Three    *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3  `json:"3"`
	Four     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4  `json:"4"`
	Five     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5  `json:"5"`
	Six      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6  `json:"6"`
	Seven    *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7  `json:"7"`
	Eight    *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8  `json:"8"`
	Nine     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9  `json:"9"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBody struct {
	Ssids UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids `json:"ssids"`
}

type UpdateNetworkClientSplashAuthorizationStatusRequest struct {
	PathParams UpdateNetworkClientSplashAuthorizationStatusPathParams
	Request    UpdateNetworkClientSplashAuthorizationStatusRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkClientSplashAuthorizationStatusResponse struct {
	ContentType                                                          string
	StatusCode                                                           int64
	UpdateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject map[string]interface{}
}
