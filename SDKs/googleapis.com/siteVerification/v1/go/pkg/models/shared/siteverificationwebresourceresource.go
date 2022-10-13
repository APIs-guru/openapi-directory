package shared

type SiteVerificationWebResourceResourceSite struct {
	Identifier *string `json:"identifier"`
	Type       *string `json:"type"`
}

type SiteVerificationWebResourceResource struct {
	ID     *string                                  `json:"id"`
	Owners []string                                 `json:"owners"`
	Site   *SiteVerificationWebResourceResourceSite `json:"site"`
}
