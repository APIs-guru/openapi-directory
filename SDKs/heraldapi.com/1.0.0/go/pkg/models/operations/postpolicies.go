package operations

import (
	"openapi/pkg/models/shared"
)

type PostPoliciesRequestBody struct {
	QuoteID *string `json:"quote_id,omitempty"`
}

type PostPolicies200ApplicationJSON struct {
	Policy *shared.Policy `json:"policy,omitempty"`
}

type PostPoliciesRequest struct {
	Request *PostPoliciesRequestBody `request:"mediaType=application/json"`
}

type PostPoliciesResponse struct {
	ContentType                          string
	StatusCode                           int64
	PostPolicies200ApplicationJSONObject *PostPolicies200ApplicationJSON
}
