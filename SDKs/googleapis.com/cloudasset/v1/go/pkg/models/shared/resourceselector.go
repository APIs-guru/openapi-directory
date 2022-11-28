package shared

// ResourceSelector
// Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects.
type ResourceSelector struct {
	FullResourceName *string `json:"fullResourceName,omitempty"`
}
