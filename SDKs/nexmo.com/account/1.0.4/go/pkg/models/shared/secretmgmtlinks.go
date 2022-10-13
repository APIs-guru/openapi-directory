package shared

type SecretMgmtLinksSelf struct {
	Href *string `json:"href"`
}

type SecretMgmtLinks struct {
	Self *SecretMgmtLinksSelf `json:"self"`
}
