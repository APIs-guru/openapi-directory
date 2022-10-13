package shared

type ListServicesResponse struct {
	APIVersion  *string   `json:"apiVersion"`
	Items       []Service `json:"items"`
	Kind        *string   `json:"kind"`
	Metadata    *ListMeta `json:"metadata"`
	Unreachable []string  `json:"unreachable"`
}
