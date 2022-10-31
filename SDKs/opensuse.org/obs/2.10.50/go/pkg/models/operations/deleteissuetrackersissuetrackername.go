package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteIssueTrackersIssueTrackerNamePathParams struct {
	IssueTrackerName string `pathParam:"style=simple,explode=false,name=issue_tracker_name"`
}

type DeleteIssueTrackersIssueTrackerNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type DeleteIssueTrackersIssueTrackerNameRequest struct {
	PathParams DeleteIssueTrackersIssueTrackerNamePathParams
	Security   DeleteIssueTrackersIssueTrackerNameSecurity
}

type DeleteIssueTrackersIssueTrackerNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
