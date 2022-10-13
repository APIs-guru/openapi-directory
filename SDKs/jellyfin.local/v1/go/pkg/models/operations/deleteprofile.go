package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProfilePathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DeleteProfileSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteProfileRequest struct {
	PathParams DeleteProfilePathParams
	Security   DeleteProfileSecurity
}

type DeleteProfileResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
