package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPolicyPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserPolicyRequests struct {
	UserPolicy  *shared.UserPolicy `request:"mediaType=application/*+json"`
	UserPolicy1 *shared.UserPolicy `request:"mediaType=application/json"`
	UserPolicy2 *shared.UserPolicy `request:"mediaType=text/json"`
}

type UpdateUserPolicySecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUserPolicyRequest struct {
	PathParams UpdateUserPolicyPathParams
	Request    UpdateUserPolicyRequests
	Security   UpdateUserPolicySecurity
}

type UpdateUserPolicyResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
