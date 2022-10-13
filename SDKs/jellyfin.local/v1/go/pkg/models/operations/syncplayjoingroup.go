package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlayJoinGroupRequests struct {
	JoinGroupRequestDto  *shared.JoinGroupRequestDto `request:"mediaType=application/*+json"`
	JoinGroupRequestDto1 *shared.JoinGroupRequestDto `request:"mediaType=application/json"`
	JoinGroupRequestDto2 *shared.JoinGroupRequestDto `request:"mediaType=text/json"`
}

type SyncPlayJoinGroupSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlayJoinGroupRequest struct {
	Request  SyncPlayJoinGroupRequests
	Security SyncPlayJoinGroupSecurity
}

type SyncPlayJoinGroupResponse struct {
	ContentType string
	StatusCode  int64
}
