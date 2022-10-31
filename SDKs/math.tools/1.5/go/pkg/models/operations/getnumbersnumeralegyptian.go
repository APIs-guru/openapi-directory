package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersNumeralEgyptianQueryParams struct {
	Number *int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersNumeralEgyptianSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersNumeralEgyptianRequest struct {
	QueryParams GetNumbersNumeralEgyptianQueryParams
	Security    GetNumbersNumeralEgyptianSecurity
}

type GetNumbersNumeralEgyptianResponse struct {
	ContentType string
	StatusCode  int64
}
