package shared

type EffectiveGuestPolicySourcedSoftwareRecipe struct {
	SoftwareRecipe *SoftwareRecipe `json:"softwareRecipe"`
	Source         *string         `json:"source"`
}
