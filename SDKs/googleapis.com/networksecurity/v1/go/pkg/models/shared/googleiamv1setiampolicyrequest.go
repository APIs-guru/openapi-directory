package shared

// GoogleIamV1SetIamPolicyRequest
// Request message for `SetIamPolicy` method.
type GoogleIamV1SetIamPolicyRequest struct {
	Policy     *GoogleIamV1Policy `json:"policy,omitempty"`
	UpdateMask *string            `json:"updateMask,omitempty"`
}
