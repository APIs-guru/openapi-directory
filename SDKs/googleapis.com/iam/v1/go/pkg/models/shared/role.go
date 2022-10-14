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
	Deleted             *bool          `json:"deleted,omitempty"`
	Description         *string        `json:"description,omitempty"`
	Etag                *string        `json:"etag,omitempty"`
	IncludedPermissions []string       `json:"includedPermissions,omitempty"`
	Name                *string        `json:"name,omitempty"`
	Stage               *RoleStageEnum `json:"stage,omitempty"`
	Title               *string        `json:"title,omitempty"`
}
