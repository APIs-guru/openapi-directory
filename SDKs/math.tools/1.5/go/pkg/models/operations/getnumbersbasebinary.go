package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersBaseBinaryQueryParams struct {
	From   *int64 `queryParam:"style=form,explode=true,name=from"`
	Number int64  `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersBaseBinarySecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersBaseBinaryRequest struct {
	QueryParams GetNumbersBaseBinaryQueryParams
	Security    GetNumbersBaseBinarySecurity
}

type GetNumbersBaseBinaryResponse struct {
	ContentType string
	StatusCode  int64
}
