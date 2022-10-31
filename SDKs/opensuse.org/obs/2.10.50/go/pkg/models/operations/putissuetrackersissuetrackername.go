package operations

import (
"openapi/pkg/models/shared")

type PutIssueTrackersIssueTrackerNamePathParams struct {
    IssueTrackerName string `pathParam:"style=simple,explode=false,name=issue_tracker_name"`
    
}

type PutIssueTrackersIssueTrackerNameSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PutIssueTrackersIssueTrackerNameRequest struct {
    PathParams PutIssueTrackersIssueTrackerNamePathParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PutIssueTrackersIssueTrackerNameSecurity 
    
}

type PutIssueTrackersIssueTrackerNameResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

