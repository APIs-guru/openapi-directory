package operations

import (
	"openapi/pkg/models/shared"
)

type GetIssueTrackersIssueTrackerNamePathParams struct {
	IssueTrackerName string `pathParam:"style=simple,explode=false,name=issue_tracker_name"`
}

type GetIssueTrackersIssueTrackerNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetIssueTrackersIssueTrackerNameRequest struct {
	PathParams GetIssueTrackersIssueTrackerNamePathParams
	Security   GetIssueTrackersIssueTrackerNameSecurity
}

type GetIssueTrackersIssueTrackerNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
