package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumbersNodSecurity struct {
	XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetNumbersNodRequest struct {
	Security GetNumbersNodSecurity
}

type GetNumbersNodResponse struct {
	ContentType string
	StatusCode  int64
}
