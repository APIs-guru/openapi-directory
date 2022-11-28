package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPolicyPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserPolicyRequestsInput struct {
	UserPolicy  *shared.UserPolicyInput `request:"mediaType=application/*+json"`
	UserPolicy1 *shared.UserPolicyInput `request:"mediaType=application/json"`
	UserPolicy2 *shared.UserPolicyInput `request:"mediaType=text/json"`
}

type UpdateUserPolicySecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUserPolicyRequest struct {
	PathParams UpdateUserPolicyPathParams
	Request    UpdateUserPolicyRequestsInput
	Security   UpdateUserPolicySecurity
}

type UpdateUserPolicyResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
