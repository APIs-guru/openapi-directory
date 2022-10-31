package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersPrimeIsPellPrimeQueryParams struct {
	Number *int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersPrimeIsPellPrimeSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersPrimeIsPellPrimeRequest struct {
	QueryParams GetNumbersPrimeIsPellPrimeQueryParams
	Security    GetNumbersPrimeIsPellPrimeSecurity
}

type GetNumbersPrimeIsPellPrimeResponse struct {
	ContentType string
	StatusCode  int64
}
