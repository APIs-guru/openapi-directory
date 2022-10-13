package shared

type EffectiveGuestPolicy struct {
	PackageRepositories []EffectiveGuestPolicySourcedPackageRepository `json:"packageRepositories"`
	Packages            []EffectiveGuestPolicySourcedPackage           `json:"packages"`
	SoftwareRecipes     []EffectiveGuestPolicySourcedSoftwareRecipe    `json:"softwareRecipes"`
}
