package shared

type AuthenticatorConfigInfoRepresentation struct {
	HelpText   *string                        `json:"helpText,omitempty"`
	Name       *string                        `json:"name,omitempty"`
	Properties []ConfigPropertyRepresentation `json:"properties,omitempty"`
	ProviderID *string                        `json:"providerId,omitempty"`
}
