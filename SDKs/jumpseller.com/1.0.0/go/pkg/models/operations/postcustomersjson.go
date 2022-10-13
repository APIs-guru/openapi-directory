package operations

import (
	"openapi/pkg/models/shared"
)

type PostCustomersJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostCustomersJSONRequest struct {
	QueryParams PostCustomersJSONQueryParams
	Request     shared.CustomerWithPasswordNoID `request:"mediaType=application/json"`
}

type PostCustomersJSONResponse struct {
	ContentType string
	Customer    *shared.Customer
	NotFound    *interface{}
	StatusCode  int64
}
