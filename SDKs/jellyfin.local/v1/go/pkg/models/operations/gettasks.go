package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksQueryParams struct {
	IsEnabled *bool `queryParam:"style=form,explode=true,name=isEnabled"`
	IsHidden  *bool `queryParam:"style=form,explode=true,name=isHidden"`
}

type GetTasksSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetTasksRequest struct {
	QueryParams GetTasksQueryParams
	Security    GetTasksSecurity
}

type GetTasksResponse struct {
	ContentType string
	StatusCode  int64
	TaskInfos   []shared.TaskInfo
}
