package operations

type UpdateNetworkClientSplashAuthorizationStatusPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0
// Splash authorization for SSID 0
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1
// Splash authorization for SSID 1
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10
// Splash authorization for SSID 10
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11
// Splash authorization for SSID 11
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12
// Splash authorization for SSID 12
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13
// Splash authorization for SSID 13
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14
// Splash authorization for SSID 14
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2
// Splash authorization for SSID 2
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3
// Splash authorization for SSID 3
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4
// Splash authorization for SSID 4
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5
// Splash authorization for SSID 5
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6
// Splash authorization for SSID 6
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7
// Splash authorization for SSID 7
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8
// Splash authorization for SSID 8
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9
// Splash authorization for SSID 9
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9 struct {
	IsAuthorized *bool `json:"isAuthorized,omitempty"`
}

// UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids
// The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs
type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids struct {
	Zero     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0  `json:"0,omitempty"`
	One      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1  `json:"1,omitempty"`
	Ten      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 `json:"10,omitempty"`
	Eleven   *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 `json:"11,omitempty"`
	Twelve   *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 `json:"12,omitempty"`
	Thirteen *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 `json:"13,omitempty"`
	Fourteen *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 `json:"14,omitempty"`
	Two      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2  `json:"2,omitempty"`
	Three    *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3  `json:"3,omitempty"`
	Four     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4  `json:"4,omitempty"`
	Five     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5  `json:"5,omitempty"`
	Six      *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6  `json:"6,omitempty"`
	Seven    *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7  `json:"7,omitempty"`
	Eight    *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8  `json:"8,omitempty"`
	Nine     *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9  `json:"9,omitempty"`
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
