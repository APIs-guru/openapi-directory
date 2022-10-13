package shared

type RoleStageEnum string

const (
	RoleStageEnumAlpha      RoleStageEnum = "ALPHA"
	RoleStageEnumBeta       RoleStageEnum = "BETA"
	RoleStageEnumGa         RoleStageEnum = "GA"
	RoleStageEnumDeprecated RoleStageEnum = "DEPRECATED"
	RoleStageEnumDisabled   RoleStageEnum = "DISABLED"
	RoleStageEnumEap        RoleStageEnum = "EAP"
)

type Role struct {
	Deleted             *bool          `json:"deleted"`
	Description         *string        `json:"description"`
	Etag                *string        `json:"etag"`
	IncludedPermissions []string       `json:"includedPermissions"`
	Name                *string        `json:"name"`
	Stage               *RoleStageEnum `json:"stage"`
	Title               *string        `json:"title"`
}
