package shared

type EffectiveGuestPolicySourcedSoftwareRecipe struct {
	SoftwareRecipe *SoftwareRecipe `json:"softwareRecipe,omitempty"`
	Source         *string         `json:"source,omitempty"`
}
