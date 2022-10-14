package shared

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
