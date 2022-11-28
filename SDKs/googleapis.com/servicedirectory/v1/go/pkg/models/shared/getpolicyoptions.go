package shared

// GetPolicyOptions
// Encapsulates settings provided to GetIamPolicy.
type GetPolicyOptions struct {
	RequestedPolicyVersion *int32 `json:"requestedPolicyVersion,omitempty"`
}
