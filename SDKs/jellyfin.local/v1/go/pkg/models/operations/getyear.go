package operations

import (
	"openapi/pkg/models/shared"
)

type GetYearPathParams struct {
	Year int32 `pathParam:"style=simple,explode=false,name=year"`
}

type GetYearQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetYearSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetYearRequest struct {
	PathParams  GetYearPathParams
	QueryParams GetYearQueryParams
	Security    GetYearSecurity
}

type GetYearResponse struct {
	BaseItemDto    *shared.BaseItemDto
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
