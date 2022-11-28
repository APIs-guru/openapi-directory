package shared

// SetIamPolicyRequest
// Request message for SetIamPolicy method.
type SetIamPolicyRequest struct {
	Policy     *Policy `json:"policy,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
