package operations



type UpdateNetworkClientSplashAuthorizationStatusPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9 struct {
    IsAuthorized *bool `json:"isAuthorized,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids struct {
    Zero *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0 `json:"0,omitempty"`
    One *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1 `json:"1,omitempty"`
    Ten *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 `json:"10,omitempty"`
    Eleven *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 `json:"11,omitempty"`
    Twelve *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 `json:"12,omitempty"`
    Thirteen *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 `json:"13,omitempty"`
    Fourteen *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 `json:"14,omitempty"`
    Two *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 `json:"2,omitempty"`
    Three *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 `json:"3,omitempty"`
    Four *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4 `json:"4,omitempty"`
    Five *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5 `json:"5,omitempty"`
    Six *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6 `json:"6,omitempty"`
    Seven *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 `json:"7,omitempty"`
    Eight *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8 `json:"8,omitempty"`
    Nine *UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9 `json:"9,omitempty"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequestBody struct {
    Ssids UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids `json:"ssids"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusRequest struct {
    PathParams UpdateNetworkClientSplashAuthorizationStatusPathParams 
    Request UpdateNetworkClientSplashAuthorizationStatusRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkClientSplashAuthorizationStatusResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject map[string]interface{} 
    
}

