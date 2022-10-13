package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersOrdinalQueryParams struct {
	Number *int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersOrdinalSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersOrdinalRequest struct {
	QueryParams GetNumbersOrdinalQueryParams
	Security    GetNumbersOrdinalSecurity
}

type GetNumbersOrdinalResponse struct {
	ContentType string
	StatusCode  int64
}
