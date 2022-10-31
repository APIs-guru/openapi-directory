package operations

import (
"openapi/pkg/models/shared")

type AddTunerHostRequests struct {
    TunerHostInfo *shared.TunerHostInfo `request:"mediaType=application/*+json"`
    TunerHostInfo1 *shared.TunerHostInfo `request:"mediaType=application/json"`
    TunerHostInfo2 *shared.TunerHostInfo `request:"mediaType=text/json"`
    
}

type AddTunerHostSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddTunerHostRequest struct {
    Request *AddTunerHostRequests 
    Security AddTunerHostSecurity 
    
}

type AddTunerHostResponse struct {
    ContentType string 
    StatusCode int64 
    TunerHostInfo *shared.TunerHostInfo 
    
}

