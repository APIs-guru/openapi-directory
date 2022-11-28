package shared

// EffectiveGuestPolicy
// The effective guest policy that applies to a VM instance.
type EffectiveGuestPolicy struct {
	PackageRepositories []EffectiveGuestPolicySourcedPackageRepository `json:"packageRepositories,omitempty"`
	Packages            []EffectiveGuestPolicySourcedPackage           `json:"packages,omitempty"`
	SoftwareRecipes     []EffectiveGuestPolicySourcedSoftwareRecipe    `json:"softwareRecipes,omitempty"`
}
