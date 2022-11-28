package shared

// ListServicesResponse
// A list of Service resources.
type ListServicesResponse struct {
	APIVersion  *string   `json:"apiVersion,omitempty"`
	Items       []Service `json:"items,omitempty"`
	Kind        *string   `json:"kind,omitempty"`
	Metadata    *ListMeta `json:"metadata,omitempty"`
	Unreachable []string  `json:"unreachable,omitempty"`
}
