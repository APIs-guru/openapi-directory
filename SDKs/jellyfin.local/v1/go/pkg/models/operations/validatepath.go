package operations

import (
	"openapi/pkg/models/shared"
)

type ValidatePathRequests struct {
	ValidatePathDto  *shared.ValidatePathDto `request:"mediaType=application/*+json"`
	ValidatePathDto1 *shared.ValidatePathDto `request:"mediaType=application/json"`
	ValidatePathDto2 *shared.ValidatePathDto `request:"mediaType=text/json"`
}

type ValidatePathSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ValidatePathRequest struct {
	Request  ValidatePathRequests
	Security ValidatePathSecurity
}

type ValidatePathResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
