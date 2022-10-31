package operations

import (
"openapi/pkg/models/shared")

type ServiceLiveStatsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ServiceLiveStatsSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ServiceLiveStatsRequest struct {
    PathParams ServiceLiveStatsPathParams 
    Security ServiceLiveStatsSecurity 
    
}

type ServiceLiveStatsResponse struct {
    Body []byte 
    ContentType string 
    Stats *shared.Stats 
    StatusCode int64 
    
}

