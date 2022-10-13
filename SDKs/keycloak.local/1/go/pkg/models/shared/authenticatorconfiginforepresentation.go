package shared

type AuthenticatorConfigInfoRepresentation struct {
	HelpText   *string                        `json:"helpText"`
	Name       *string                        `json:"name"`
	Properties []ConfigPropertyRepresentation `json:"properties"`
	ProviderID *string                        `json:"providerId"`
}
