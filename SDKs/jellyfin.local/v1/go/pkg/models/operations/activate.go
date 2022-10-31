package operations

import (
	"openapi/pkg/models/shared"
)

type ActivateSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ActivateRequest struct {
	Security ActivateSecurity
}

type ActivateResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
