package operations

import (
"openapi/pkg/models/shared")

type GetDistributionsIncludeRemotesSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetDistributionsIncludeRemotesRequest struct {
    Security GetDistributionsIncludeRemotesSecurity 
    
}

type GetDistributionsIncludeRemotesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

