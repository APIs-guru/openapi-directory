package shared

// SecretMgmtLinksSelf
// This resource
type SecretMgmtLinksSelf struct {
	Href *string `json:"href,omitempty"`
}

// SecretMgmtLinks
// Links related to this resource
type SecretMgmtLinks struct {
	Self *SecretMgmtLinksSelf `json:"self,omitempty"`
}
