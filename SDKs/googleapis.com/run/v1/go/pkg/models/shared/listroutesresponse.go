package shared

type ListRoutesResponse struct {
	APIVersion  *string   `json:"apiVersion"`
	Items       []Route   `json:"items"`
	Kind        *string   `json:"kind"`
	Metadata    *ListMeta `json:"metadata"`
	Unreachable []string  `json:"unreachable"`
}
