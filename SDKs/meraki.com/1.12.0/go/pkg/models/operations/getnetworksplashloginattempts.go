package operations



type GetNetworkSplashLoginAttemptsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSplashLoginAttemptsQueryParams struct {
    LoginIdentifier *string `queryParam:"style=form,explode=true,name=loginIdentifier"`
    SsidNumber *int64 `queryParam:"style=form,explode=true,name=ssidNumber"`
    Timespan *int64 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkSplashLoginAttemptsRequest struct {
    PathParams GetNetworkSplashLoginAttemptsPathParams 
    QueryParams GetNetworkSplashLoginAttemptsQueryParams 
    
}

type GetNetworkSplashLoginAttemptsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSplashLoginAttempts200ApplicationJSONObject map[string]interface{} 
    
}

