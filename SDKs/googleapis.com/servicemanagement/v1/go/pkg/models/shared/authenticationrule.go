package shared

// AuthenticationRule
// Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
type AuthenticationRule struct {
	AllowWithoutCredential *bool              `json:"allowWithoutCredential,omitempty"`
	Oauth                  *OAuthRequirements `json:"oauth,omitempty"`
	Requirements           []AuthRequirement  `json:"requirements,omitempty"`
	Selector               *string            `json:"selector,omitempty"`
}
