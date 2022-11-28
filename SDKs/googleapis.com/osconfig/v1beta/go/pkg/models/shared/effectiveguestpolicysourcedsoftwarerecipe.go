package shared

// EffectiveGuestPolicySourcedSoftwareRecipe
// A guest policy recipe including its source.
type EffectiveGuestPolicySourcedSoftwareRecipe struct {
	SoftwareRecipe *SoftwareRecipe `json:"softwareRecipe,omitempty"`
	Source         *string         `json:"source,omitempty"`
}
