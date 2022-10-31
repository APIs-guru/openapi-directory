package operations

import (
"openapi/pkg/models/shared")

type GetWakeOnLanInfoSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWakeOnLanInfoRequest struct {
    Security GetWakeOnLanInfoSecurity 
    
}

type GetWakeOnLanInfoResponse struct {
    ContentType string 
    StatusCode int64 
    WakeOnLanInfos []shared.WakeOnLanInfo 
    
}

