package shared

type GuestPolicy struct {
	Assignment          *Assignment         `json:"assignment"`
	CreateTime          *string             `json:"createTime"`
	Description         *string             `json:"description"`
	Etag                *string             `json:"etag"`
	Name                *string             `json:"name"`
	PackageRepositories []PackageRepository `json:"packageRepositories"`
	Packages            []Package           `json:"packages"`
	Recipes             []SoftwareRecipe    `json:"recipes"`
	UpdateTime          *string             `json:"updateTime"`
}
