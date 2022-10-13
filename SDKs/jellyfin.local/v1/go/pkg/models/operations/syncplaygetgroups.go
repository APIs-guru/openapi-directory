package operations

import (
	"openapi/pkg/models/shared"
)

type SyncPlayGetGroupsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SyncPlayGetGroupsRequest struct {
	Security SyncPlayGetGroupsSecurity
}

type SyncPlayGetGroupsResponse struct {
	ContentType   string
	GroupInfoDtos []shared.GroupInfoDto
	StatusCode    int64
}
