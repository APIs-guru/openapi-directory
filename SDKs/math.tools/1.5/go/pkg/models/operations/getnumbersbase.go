package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersBaseQueryParams struct {
	From   *int64 `queryParam:"style=form,explode=true,name=from"`
	Number int64  `queryParam:"style=form,explode=true,name=number"`
	To     int64  `queryParam:"style=form,explode=true,name=to"`
}

type GetNumbersBaseSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersBaseRequest struct {
	QueryParams GetNumbersBaseQueryParams
	Security    GetNumbersBaseSecurity
}

type GetNumbersBaseResponse struct {
	ContentType string
	StatusCode  int64
}
