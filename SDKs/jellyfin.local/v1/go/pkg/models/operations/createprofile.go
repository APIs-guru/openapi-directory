package operations

import (
"openapi/pkg/models/shared")

type CreateProfileRequests struct {
    DeviceProfile *shared.DeviceProfile `request:"mediaType=application/*+json"`
    DeviceProfile1 *shared.DeviceProfile `request:"mediaType=application/json"`
    DeviceProfile2 *shared.DeviceProfile `request:"mediaType=text/json"`
    
}

type CreateProfileSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateProfileRequest struct {
    Request *CreateProfileRequests 
    Security CreateProfileSecurity 
    
}

type CreateProfileResponse struct {
    ContentType string 
    StatusCode int64 
    
}

