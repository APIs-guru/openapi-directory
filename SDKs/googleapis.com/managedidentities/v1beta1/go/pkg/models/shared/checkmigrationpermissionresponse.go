package shared

type CheckMigrationPermissionResponseStateEnum string

const (
	CheckMigrationPermissionResponseStateEnumStateUnspecified CheckMigrationPermissionResponseStateEnum = "STATE_UNSPECIFIED"
	CheckMigrationPermissionResponseStateEnumDisabled         CheckMigrationPermissionResponseStateEnum = "DISABLED"
	CheckMigrationPermissionResponseStateEnumEnabled          CheckMigrationPermissionResponseStateEnum = "ENABLED"
	CheckMigrationPermissionResponseStateEnumNeedsMaintenance CheckMigrationPermissionResponseStateEnum = "NEEDS_MAINTENANCE"
)

type CheckMigrationPermissionResponse struct {
	OnpremDomains []OnPremDomainSidDetails                   `json:"onpremDomains,omitempty"`
	State         *CheckMigrationPermissionResponseStateEnum `json:"state,omitempty"`
}
