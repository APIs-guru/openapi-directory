package shared

type GoogleIdentityAccesscontextmanagerV1EgressTo struct {
	ExternalResources []string                                           `json:"externalResources,omitempty"`
	Operations        []GoogleIdentityAccesscontextmanagerV1APIOperation `json:"operations,omitempty"`
	Resources         []string                                           `json:"resources,omitempty"`
}
