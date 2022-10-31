package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersPiQueryParams struct {
	From *int64 `queryParam:"style=form,explode=true,name=from"`
	To   *int64 `queryParam:"style=form,explode=true,name=to"`
}

type GetNumbersPiSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersPiRequest struct {
	QueryParams GetNumbersPiQueryParams
	Security    GetNumbersPiSecurity
}

type GetNumbersPiResponse struct {
	ContentType string
	StatusCode  int64
}
