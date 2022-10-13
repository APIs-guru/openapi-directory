package operations

import (
	"openapi/pkg/models/shared"
)

type GetPagesIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetPagesIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetPagesIDJSONRequest struct {
	PathParams  GetPagesIDJSONPathParams
	QueryParams GetPagesIDJSONQueryParams
}

type GetPagesIDJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Page        *shared.Page
	StatusCode  int64
}
