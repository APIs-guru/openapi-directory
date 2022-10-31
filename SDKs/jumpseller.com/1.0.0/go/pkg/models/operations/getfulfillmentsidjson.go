package operations

import (
	"openapi/pkg/models/shared"
)

type GetFulfillmentsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFulfillmentsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetFulfillmentsIDJSONRequest struct {
	PathParams  GetFulfillmentsIDJSONPathParams
	QueryParams GetFulfillmentsIDJSONQueryParams
}

type GetFulfillmentsIDJSONResponse struct {
	ContentType string
	Fulfillment *shared.Fulfillment
	NotFound    *interface{}
	StatusCode  int64
}
