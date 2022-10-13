package shared

type ListDomainMappingsResponse struct {
	APIVersion  *string         `json:"apiVersion"`
	Items       []DomainMapping `json:"items"`
	Kind        *string         `json:"kind"`
	Metadata    *ListMeta       `json:"metadata"`
	Unreachable []string        `json:"unreachable"`
}
