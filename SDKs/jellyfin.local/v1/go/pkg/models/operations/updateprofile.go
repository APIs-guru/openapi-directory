package operations

import (
"openapi/pkg/models/shared")

type UpdateProfilePathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}

type UpdateProfileRequests struct {
    DeviceProfile *shared.DeviceProfile `request:"mediaType=application/*+json"`
    DeviceProfile1 *shared.DeviceProfile `request:"mediaType=application/json"`
    DeviceProfile2 *shared.DeviceProfile `request:"mediaType=text/json"`
    
}

type UpdateProfileSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateProfileRequest struct {
    PathParams UpdateProfilePathParams 
    Request *UpdateProfileRequests 
    Security UpdateProfileSecurity 
    
}

type UpdateProfileResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

