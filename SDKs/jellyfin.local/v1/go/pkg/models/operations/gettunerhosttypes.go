package operations

import (
	"openapi/pkg/models/shared"
)

type GetTunerHostTypesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetTunerHostTypesRequest struct {
	Security GetTunerHostTypesSecurity
}

type GetTunerHostTypesResponse struct {
	ContentType string
	NameIDPairs []shared.NameIDPair
	StatusCode  int64
}
