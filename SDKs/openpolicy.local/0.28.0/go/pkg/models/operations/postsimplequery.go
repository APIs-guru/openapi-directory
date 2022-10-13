package operations

import (
	"openapi/pkg/models/shared"
)

type PostSimpleQueryQueryParams struct {
	Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type PostSimpleQueryRequest struct {
	QueryParams PostSimpleQueryQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type PostSimpleQueryResponse struct {
	FourHundred        *shared.FourHundred
	FourHundredAndFour *shared.FourHundredAndFour
	ContentType        string
	StatusCode         int64
}
