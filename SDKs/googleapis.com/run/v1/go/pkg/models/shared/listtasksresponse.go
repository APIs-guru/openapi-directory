package shared

type ListTasksResponse struct {
	APIVersion  *string   `json:"apiVersion"`
	Items       []Task    `json:"items"`
	Kind        *string   `json:"kind"`
	Metadata    *ListMeta `json:"metadata"`
	Unreachable []string  `json:"unreachable"`
}
