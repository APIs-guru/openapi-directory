package shared

type GoogleIdentityAccesscontextmanagerV1EgressTo struct {
	ExternalResources []string                                           `json:"externalResources"`
	Operations        []GoogleIdentityAccesscontextmanagerV1APIOperation `json:"operations"`
	Resources         []string                                           `json:"resources"`
}
