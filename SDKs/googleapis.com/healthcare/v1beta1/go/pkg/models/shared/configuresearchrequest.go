package shared

type ConfigureSearchRequest struct {
	CanonicalUrls []string `json:"canonicalUrls"`
	ValidateOnly  *bool    `json:"validateOnly"`
}
