package shared

type ListTasksResponse struct {
	APIVersion  *string   `json:"apiVersion,omitempty"`
	Items       []Task    `json:"items,omitempty"`
	Kind        *string   `json:"kind,omitempty"`
	Metadata    *ListMeta `json:"metadata,omitempty"`
	Unreachable []string  `json:"unreachable,omitempty"`
}
