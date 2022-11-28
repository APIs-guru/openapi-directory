package shared

// CreateManagedShortLinkResponse
// Response to create a short Dynamic Link.
type CreateManagedShortLinkResponse struct {
	ManagedShortLink *ManagedShortLink    `json:"managedShortLink,omitempty"`
	PreviewLink      *string              `json:"previewLink,omitempty"`
	Warning          []DynamicLinkWarning `json:"warning,omitempty"`
}
