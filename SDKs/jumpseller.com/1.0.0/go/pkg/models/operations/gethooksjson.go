package operations

import (
	"openapi/pkg/models/shared"
)

type GetHooksJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Limit     *int64 `queryParam:"style=form,explode=true,name=limit"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
	Page      *int64 `queryParam:"style=form,explode=true,name=page"`
}

type GetHooksJSONRequest struct {
	QueryParams GetHooksJSONQueryParams
}

type GetHooksJSONResponse struct {
	ContentType string
	Hooks       []shared.Hook
	StatusCode  int64
}
