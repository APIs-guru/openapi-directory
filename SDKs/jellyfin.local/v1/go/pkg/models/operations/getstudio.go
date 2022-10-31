package operations

import (
	"openapi/pkg/models/shared"
)

type GetStudioPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetStudioQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetStudioSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetStudioRequest struct {
	PathParams  GetStudioPathParams
	QueryParams GetStudioQueryParams
	Security    GetStudioSecurity
}

type GetStudioResponse struct {
	BaseItemDto *shared.BaseItemDto
	ContentType string
	StatusCode  int64
}
