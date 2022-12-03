package operations

import (
	"openapi/pkg/models/shared"
)

type GetPoliciesPolicyIDPathParams struct {
	PolicyID string `pathParam:"style=simple,explode=false,name=policy_id"`
}

type GetPoliciesPolicyID200ApplicationJSON struct {
	Policy *shared.Policy `json:"policy,omitempty"`
}

type GetPoliciesPolicyIDRequest struct {
	PathParams GetPoliciesPolicyIDPathParams
}

type GetPoliciesPolicyIDResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetPoliciesPolicyID200ApplicationJSONObject *GetPoliciesPolicyID200ApplicationJSON
}
