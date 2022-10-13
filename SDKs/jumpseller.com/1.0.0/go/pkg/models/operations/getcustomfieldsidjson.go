package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomFieldsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCustomFieldsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetCustomFieldsIDJSONRequest struct {
	PathParams  GetCustomFieldsIDJSONPathParams
	QueryParams GetCustomFieldsIDJSONQueryParams
}

type GetCustomFieldsIDJSONResponse struct {
	ContentType string
	CustomField *shared.CustomField
	NotFound    *interface{}
	StatusCode  int64
}
