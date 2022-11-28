package shared

// ResourceAccessControl
// The access controls set on the resource.
type ResourceAccessControl struct {
	GcpIamPolicy *string `json:"gcpIamPolicy,omitempty"`
}
