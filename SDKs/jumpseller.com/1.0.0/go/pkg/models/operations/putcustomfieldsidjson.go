package operations

import (
	"openapi/pkg/models/shared"
)

type PutCustomFieldsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCustomFieldsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutCustomFieldsIDJSONRequest struct {
	PathParams  PutCustomFieldsIDJSONPathParams
	QueryParams PutCustomFieldsIDJSONQueryParams
	Request     shared.CustomFieldEdit `request:"mediaType=application/json"`
}

type PutCustomFieldsIDJSONResponse struct {
	ContentType string
	CustomField *shared.CustomField
	NotFound    *interface{}
	StatusCode  int64
}
