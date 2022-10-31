package operations

import (
	"openapi/pkg/models/shared"
)

type PostCustomFieldsIDSelectOptionsJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostCustomFieldsIDSelectOptionsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostCustomFieldsIDSelectOptionsJSONRequest struct {
	PathParams  PostCustomFieldsIDSelectOptionsJSONPathParams
	QueryParams PostCustomFieldsIDSelectOptionsJSONQueryParams
	Request     shared.CustomFieldSelectOptionEdit `request:"mediaType=application/json"`
}

type PostCustomFieldsIDSelectOptionsJSONResponse struct {
	ContentType             string
	CustomFieldSelectOption *shared.CustomFieldSelectOption
	StatusCode              int64
}
