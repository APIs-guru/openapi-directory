package operations

import (
	"openapi/pkg/models/shared"
)

type PutHooksIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutHooksIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutHooksIDJSONRequest struct {
	PathParams  PutHooksIDJSONPathParams
	QueryParams PutHooksIDJSONQueryParams
	Request     shared.HookEdit `request:"mediaType=application/json"`
}

type PutHooksIDJSONResponse struct {
	ContentType string
	Hook        *shared.Hook
	NotFound    *interface{}
	StatusCode  int64
}
