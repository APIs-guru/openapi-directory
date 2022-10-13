package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlayLeaveGroupSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlayLeaveGroupRequest struct {
	Security SyncPlayLeaveGroupSecurity
}

type SyncPlayLeaveGroupResponse struct {
	ContentType string
	StatusCode  int64
}
