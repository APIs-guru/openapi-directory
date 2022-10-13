package shared

type AuthenticationRule struct {
	AllowWithoutCredential *bool              `json:"allowWithoutCredential"`
	Oauth                  *OAuthRequirements `json:"oauth"`
	Requirements           []AuthRequirement  `json:"requirements"`
	Selector               *string            `json:"selector"`
}
