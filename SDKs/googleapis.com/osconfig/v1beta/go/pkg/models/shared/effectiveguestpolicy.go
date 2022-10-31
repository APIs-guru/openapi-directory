package shared



type EffectiveGuestPolicy struct {
    PackageRepositories []EffectiveGuestPolicySourcedPackageRepository `json:"packageRepositories,omitempty"`
    Packages []EffectiveGuestPolicySourcedPackage `json:"packages,omitempty"`
    SoftwareRecipes []EffectiveGuestPolicySourcedSoftwareRecipe `json:"softwareRecipes,omitempty"`
    
}

