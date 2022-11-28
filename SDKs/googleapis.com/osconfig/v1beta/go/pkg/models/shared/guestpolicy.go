package shared

// GuestPolicyInput
// An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
type GuestPolicyInput struct {
	Assignment          *Assignment         `json:"assignment,omitempty"`
	Description         *string             `json:"description,omitempty"`
	Etag                *string             `json:"etag,omitempty"`
	Name                *string             `json:"name,omitempty"`
	PackageRepositories []PackageRepository `json:"packageRepositories,omitempty"`
	Packages            []Package           `json:"packages,omitempty"`
	Recipes             []SoftwareRecipe    `json:"recipes,omitempty"`
}

// GuestPolicy
// An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
type GuestPolicy struct {
	Assignment          *Assignment         `json:"assignment,omitempty"`
	CreateTime          *string             `json:"createTime,omitempty"`
	Description         *string             `json:"description,omitempty"`
	Etag                *string             `json:"etag,omitempty"`
	Name                *string             `json:"name,omitempty"`
	PackageRepositories []PackageRepository `json:"packageRepositories,omitempty"`
	Packages            []Package           `json:"packages,omitempty"`
	Recipes             []SoftwareRecipe    `json:"recipes,omitempty"`
	UpdateTime          *string             `json:"updateTime,omitempty"`
}
