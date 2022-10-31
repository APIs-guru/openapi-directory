package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersPrimeFactorsQueryParams struct {
	Number *int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersPrimeFactorsSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersPrimeFactorsRequest struct {
	QueryParams GetNumbersPrimeFactorsQueryParams
	Security    GetNumbersPrimeFactorsSecurity
}

type GetNumbersPrimeFactorsResponse struct {
	ContentType string
	StatusCode  int64
}
