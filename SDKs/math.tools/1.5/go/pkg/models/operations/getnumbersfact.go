package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersFactQueryParams struct {
	Number int64 `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersFactSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersFactRequest struct {
	QueryParams GetNumbersFactQueryParams
	Security    GetNumbersFactSecurity
}

type GetNumbersFactResponse struct {
	ContentType string
	StatusCode  int64
}
