package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersBaseHexQueryParams struct {
	From   *int64 `queryParam:"style=form,explode=true,name=from"`
	Number int64  `queryParam:"style=form,explode=true,name=number"`
}

type GetNumbersBaseHexSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersBaseHexRequest struct {
	QueryParams GetNumbersBaseHexQueryParams
	Security    GetNumbersBaseHexSecurity
}

type GetNumbersBaseHexResponse struct {
	ContentType string
	StatusCode  int64
}
