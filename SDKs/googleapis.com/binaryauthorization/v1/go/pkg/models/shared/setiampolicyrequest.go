package shared

// SetIamPolicyRequest
// Request message for `SetIamPolicy` method.
type SetIamPolicyRequest struct {
	Policy *IamPolicy `json:"policy,omitempty"`
}
