package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomersIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCustomersIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetCustomersIDJSONRequest struct {
	PathParams  GetCustomersIDJSONPathParams
	QueryParams GetCustomersIDJSONQueryParams
}

type GetCustomersIDJSONResponse struct {
	ContentType string
	Customer    *shared.Customer
	NotFound    *interface{}
	StatusCode  int64
}
