package operations

import (
	"openapi/pkg/models/shared"
)

type PostPagesJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostPagesJSONRequest struct {
	QueryParams PostPagesJSONQueryParams
	Request     shared.PageModify `request:"mediaType=application/json"`
}

type PostPagesJSONResponse struct {
	ContentType string
	Page        *shared.Page
	StatusCode  int64
}
