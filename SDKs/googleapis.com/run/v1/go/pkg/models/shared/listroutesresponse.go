package shared

// ListRoutesResponse
// ListRoutesResponse is a list of Route resources.
type ListRoutesResponse struct {
	APIVersion  *string   `json:"apiVersion,omitempty"`
	Items       []Route   `json:"items,omitempty"`
	Kind        *string   `json:"kind,omitempty"`
	Metadata    *ListMeta `json:"metadata,omitempty"`
	Unreachable []string  `json:"unreachable,omitempty"`
}
