package operations

import (
	"openapi/pkg/models/shared"
)

type GetDefaultTimerQueryParams struct {
	ProgramID *string `queryParam:"style=form,explode=true,name=programId"`
}

type GetDefaultTimerSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetDefaultTimerRequest struct {
	QueryParams GetDefaultTimerQueryParams
	Security    GetDefaultTimerSecurity
}

type GetDefaultTimerResponse struct {
	ContentType        string
	SeriesTimerInfoDto *shared.SeriesTimerInfoDto
	StatusCode         int64
}
