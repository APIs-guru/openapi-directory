package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1BillTypesQueryParams struct {
	Category *shared.BillTypeCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	Skip     *int32                       `queryParam:"style=form,explode=true,name=Skip"`
	Take     *int32                       `queryParam:"style=form,explode=true,name=Take"`
}

type GetAPIV1BillTypesRequest struct {
	QueryParams GetAPIV1BillTypesQueryParams
}

type GetAPIV1BillTypesResponse struct {
	BillTypeSearchResult *shared.BillTypeSearchResult
	Body                 []byte
	ContentType          string
	ProblemDetails       map[string]interface{}
	StatusCode           int64
}
