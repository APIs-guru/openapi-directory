package operations

import (
"openapi/pkg/models/shared")

type GetDefaultProfileSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDefaultProfileRequest struct {
    Security GetDefaultProfileSecurity 
    
}

type GetDefaultProfileResponse struct {
    ContentType string 
    DeviceProfile *shared.DeviceProfile 
    StatusCode int64 
    
}

