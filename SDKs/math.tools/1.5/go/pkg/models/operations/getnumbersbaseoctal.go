package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersBaseOctalQueryParams struct {
	From   *int64 `queryParam:"style=form,explode=true,name=from"`
	Number int64  `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersBaseOctalSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersBaseOctalRequest struct {
	QueryParams GetNumbersBaseOctalQueryParams
	Security    GetNumbersBaseOctalSecurity
}

type GetNumbersBaseOctalResponse struct {
	ContentType string
	StatusCode  int64
}
