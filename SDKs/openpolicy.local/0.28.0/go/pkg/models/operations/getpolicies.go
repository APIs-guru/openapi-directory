package operations

import (
	"openapi/pkg/models/shared"
)

type GetPoliciesQueryParams struct {
	Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type GetPoliciesRequest struct {
	QueryParams GetPoliciesQueryParams
}

type GetPoliciesResponse struct {
	TwoHundredResult *shared.TwoHundredResult
	FourHundred      *shared.FourHundred
	ContentType      string
	StatusCode       int64
}
