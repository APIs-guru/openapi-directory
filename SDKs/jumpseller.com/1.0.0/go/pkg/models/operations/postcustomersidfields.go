package operations

import (
	"openapi/pkg/models/shared"
)

type PostCustomersIDFieldsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostCustomersIDFieldsQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostCustomersIDFieldsRequest struct {
	PathParams  PostCustomersIDFieldsPathParams
	QueryParams PostCustomersIDFieldsQueryParams
	Request     shared.CustomerAdditionalFieldEdit `request:"mediaType=application/json"`
}

type PostCustomersIDFieldsResponse struct {
	ContentType             string
	CustomerAdditionalField *shared.CustomerAdditionalField
	NotFound                *interface{}
	StatusCode              int64
}
