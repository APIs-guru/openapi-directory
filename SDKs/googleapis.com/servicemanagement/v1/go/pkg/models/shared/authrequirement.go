package shared

type AuthRequirement struct {
	Audiences  *string `json:"audiences"`
	ProviderID *string `json:"providerId"`
}
