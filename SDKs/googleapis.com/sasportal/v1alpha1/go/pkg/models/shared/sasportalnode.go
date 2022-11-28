package shared

// SasPortalNode
// The Node.
type SasPortalNode struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Name        *string  `json:"name,omitempty"`
	SasUserIds  []string `json:"sasUserIds,omitempty"`
}
