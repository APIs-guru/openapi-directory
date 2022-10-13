package shared

type ListConfigurationsResponse struct {
	APIVersion  *string         `json:"apiVersion"`
	Items       []Configuration `json:"items"`
	Kind        *string         `json:"kind"`
	Metadata    *ListMeta       `json:"metadata"`
	Unreachable []string        `json:"unreachable"`
}
