package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersNumeralRomanQueryParams struct {
	Number *int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersNumeralRomanSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersNumeralRomanRequest struct {
	QueryParams GetNumbersNumeralRomanQueryParams
	Security    GetNumbersNumeralRomanSecurity
}

type GetNumbersNumeralRomanResponse struct {
	ContentType string
	StatusCode  int64
}
