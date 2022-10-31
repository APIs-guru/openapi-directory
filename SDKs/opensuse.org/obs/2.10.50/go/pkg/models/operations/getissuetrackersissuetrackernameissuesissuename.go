package operations

import (
"openapi/pkg/models/shared")

type GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams struct {
    IssueName string `pathParam:"style=simple,explode=false,name=issue_name"`
    IssueTrackerName string `pathParam:"style=simple,explode=false,name=issue_tracker_name"`
    
}

type GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest struct {
    PathParams GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams 
    Security GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity 
    
}

type GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

