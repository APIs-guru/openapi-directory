package shared

// SiteVerificationWebResourceResourceSite
// The address and type of a site that is verified or will be verified.
type SiteVerificationWebResourceResourceSite struct {
	Identifier *string `json:"identifier,omitempty"`
	Type       *string `json:"type,omitempty"`
}

type SiteVerificationWebResourceResource struct {
	ID     *string                                  `json:"id,omitempty"`
	Owners []string                                 `json:"owners,omitempty"`
	Site   *SiteVerificationWebResourceResourceSite `json:"site,omitempty"`
}
