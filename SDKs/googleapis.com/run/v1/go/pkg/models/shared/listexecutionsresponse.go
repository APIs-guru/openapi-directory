package shared

type ListExecutionsResponse struct {
	APIVersion  *string     `json:"apiVersion"`
	Items       []Execution `json:"items"`
	Kind        *string     `json:"kind"`
	Metadata    *ListMeta   `json:"metadata"`
	Unreachable []string    `json:"unreachable"`
}
