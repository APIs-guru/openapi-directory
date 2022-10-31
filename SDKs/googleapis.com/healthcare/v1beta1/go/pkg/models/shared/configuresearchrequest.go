package shared

type ConfigureSearchRequest struct {
	CanonicalUrls []string `json:"canonicalUrls,omitempty"`
	ValidateOnly  *bool    `json:"validateOnly,omitempty"`
}
