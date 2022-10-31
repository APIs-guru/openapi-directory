package operations

import (
	"openapi/pkg/models/shared"
)

type PutCheckoutCustomFieldsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCheckoutCustomFieldsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutCheckoutCustomFieldsIDJSONRequest struct {
	PathParams  PutCheckoutCustomFieldsIDJSONPathParams
	QueryParams PutCheckoutCustomFieldsIDJSONQueryParams
	Request     shared.CheckoutCustomFieldEdit `request:"mediaType=application/json"`
}

type PutCheckoutCustomFieldsIDJSONResponse struct {
	CheckoutCustomField *shared.CheckoutCustomField
	ContentType         string
	NotFound            *interface{}
	StatusCode          int64
}
