package shared

type ListRevisionsResponse struct {
	APIVersion  *string    `json:"apiVersion,omitempty"`
	Items       []Revision `json:"items,omitempty"`
	Kind        *string    `json:"kind,omitempty"`
	Metadata    *ListMeta  `json:"metadata,omitempty"`
	Unreachable []string   `json:"unreachable,omitempty"`
}
