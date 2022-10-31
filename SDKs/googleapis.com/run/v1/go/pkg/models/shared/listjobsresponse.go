package shared

type ListJobsResponse struct {
	APIVersion  *string   `json:"apiVersion,omitempty"`
	Items       []Job     `json:"items,omitempty"`
	Kind        *string   `json:"kind,omitempty"`
	Metadata    *ListMeta `json:"metadata,omitempty"`
	Unreachable []string  `json:"unreachable,omitempty"`
}
