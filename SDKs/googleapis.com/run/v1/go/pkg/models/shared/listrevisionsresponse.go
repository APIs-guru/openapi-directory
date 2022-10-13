package shared

type ListRevisionsResponse struct {
	APIVersion  *string    `json:"apiVersion"`
	Items       []Revision `json:"items"`
	Kind        *string    `json:"kind"`
	Metadata    *ListMeta  `json:"metadata"`
	Unreachable []string   `json:"unreachable"`
}
