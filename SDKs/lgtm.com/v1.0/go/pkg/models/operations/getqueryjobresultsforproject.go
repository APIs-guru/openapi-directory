package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryJobResultsForProjectPathParams struct {
	ProjectID  string `pathParam:"style=simple,explode=false,name=project-id"`
	QueryjobID string `pathParam:"style=simple,explode=false,name=queryjob-id"`
}

type GetQueryJobResultsForProjectQueryParams struct {
	Limit    *int32 `queryParam:"style=form,explode=true,name=limit"`
	Nofilter *bool  `queryParam:"style=form,explode=true,name=nofilter"`
	Start    *int32 `queryParam:"style=form,explode=true,name=start"`
}

type GetQueryJobResultsForProjectSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetQueryJobResultsForProjectRequest struct {
	PathParams  GetQueryJobResultsForProjectPathParams
	QueryParams GetQueryJobResultsForProjectQueryParams
	Security    GetQueryJobResultsForProjectSecurity
}

type GetQueryJobResultsForProjectResponse struct {
	ContentType            string
	StatusCode             int64
	QueryjobProjectResults *shared.QueryjobProjectResults
}
