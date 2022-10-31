package operations

import (
"openapi/pkg/models/shared")

type GetProfilePathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}

type GetProfileSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetProfileRequest struct {
    PathParams GetProfilePathParams 
    Security GetProfileSecurity 
    
}

type GetProfileResponse struct {
    ContentType string 
    DeviceProfile *shared.DeviceProfile 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

