package operations

import (
"openapi/pkg/models/shared")

type PostIssueTrackersSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PostIssueTrackersRequest struct {
    Request []byte `request:"mediaType=application/xml"`
    Security PostIssueTrackersSecurity 
    
}

type PostIssueTrackersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

