package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersPrimeIsMersennePrimeQueryParams struct {
	Number *int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersPrimeIsMersennePrimeSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersPrimeIsMersennePrimeRequest struct {
	QueryParams GetNumbersPrimeIsMersennePrimeQueryParams
	Security    GetNumbersPrimeIsMersennePrimeSecurity
}

type GetNumbersPrimeIsMersennePrimeResponse struct {
	ContentType string
	StatusCode  int64
}
