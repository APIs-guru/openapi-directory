package shared

// PolicyInfo
// The IAM policy and its attached resource.
type PolicyInfo struct {
	AttachedResource *string `json:"attachedResource,omitempty"`
	Policy           *Policy `json:"policy,omitempty"`
}
