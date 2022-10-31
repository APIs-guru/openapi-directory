package shared

type AuthenticationRule struct {
	AllowWithoutCredential *bool              `json:"allowWithoutCredential,omitempty"`
	Oauth                  *OAuthRequirements `json:"oauth,omitempty"`
	Requirements           []AuthRequirement  `json:"requirements,omitempty"`
	Selector               *string            `json:"selector,omitempty"`
}
