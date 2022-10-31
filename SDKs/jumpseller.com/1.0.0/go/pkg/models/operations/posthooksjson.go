package operations

import (
	"openapi/pkg/models/shared"
)

type PostHooksJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostHooksJSONRequest struct {
	QueryParams PostHooksJSONQueryParams
	Request     shared.HookEdit `request:"mediaType=application/json"`
}

type PostHooksJSONResponse struct {
	ContentType string
	Hook        *shared.Hook
	NotFound    *interface{}
	StatusCode  int64
}
