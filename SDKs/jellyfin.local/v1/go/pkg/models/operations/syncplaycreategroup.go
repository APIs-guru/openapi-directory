package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlayCreateGroupRequests struct {
	NewGroupRequestDto  *shared.NewGroupRequestDto `request:"mediaType=application/*+json"`
	NewGroupRequestDto1 *shared.NewGroupRequestDto `request:"mediaType=application/json"`
	NewGroupRequestDto2 *shared.NewGroupRequestDto `request:"mediaType=text/json"`
}

type SyncPlayCreateGroupSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlayCreateGroupRequest struct {
	Request  SyncPlayCreateGroupRequests
	Security SyncPlayCreateGroupSecurity
}

type SyncPlayCreateGroupResponse struct {
	ContentType string
	StatusCode  int64
}
