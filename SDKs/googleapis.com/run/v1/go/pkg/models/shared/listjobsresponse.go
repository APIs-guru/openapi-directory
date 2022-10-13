package shared

type ListJobsResponse struct {
	APIVersion  *string   `json:"apiVersion"`
	Items       []Job     `json:"items"`
	Kind        *string   `json:"kind"`
	Metadata    *ListMeta `json:"metadata"`
	Unreachable []string  `json:"unreachable"`
}
