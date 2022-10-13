package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams struct {
	CustomFieldSelectOptionID int32 `pathParam:"style=simple,explode=false,name=custom_field_select_option_id"`
	ID                        int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest struct {
	PathParams  GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams
	QueryParams GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams
}

type GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse struct {
	ContentType             string
	CustomFieldSelectOption *shared.CustomFieldSelectOption
	NotFound                *interface{}
	StatusCode              int64
}
