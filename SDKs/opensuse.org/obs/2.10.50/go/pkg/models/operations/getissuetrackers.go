package operations

import (
	"openapi/pkg/models/shared"
)

type GetIssueTrackersSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetIssueTrackersRequest struct {
	Security GetIssueTrackersSecurity
}

type GetIssueTrackersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
