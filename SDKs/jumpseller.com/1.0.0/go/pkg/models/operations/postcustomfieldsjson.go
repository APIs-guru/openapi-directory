package operations

import (
	"openapi/pkg/models/shared"
)

type PostCustomFieldsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostCustomFieldsJSONRequest struct {
	QueryParams PostCustomFieldsJSONQueryParams
	Request     shared.CustomFieldEdit `request:"mediaType=application/json"`
}

type PostCustomFieldsJSONResponse struct {
	ContentType string
	CustomField *shared.CustomField
	StatusCode  int64
}
