package operations

import (
"openapi/pkg/models/shared")

type DiscvoverTunersQueryParams struct {
    NewDevicesOnly *bool `queryParam:"style=form,explode=true,name=newDevicesOnly"`
    
}

type DiscvoverTunersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DiscvoverTunersRequest struct {
    QueryParams DiscvoverTunersQueryParams 
    Security DiscvoverTunersSecurity 
    
}

type DiscvoverTunersResponse struct {
    ContentType string 
    StatusCode int64 
    TunerHostInfos []shared.TunerHostInfo 
    
}

