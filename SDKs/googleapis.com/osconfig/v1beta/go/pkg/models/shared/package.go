package shared

type PackageDesiredStateEnum string

const (
	PackageDesiredStateEnumDesiredStateUnspecified PackageDesiredStateEnum = "DESIRED_STATE_UNSPECIFIED"
	PackageDesiredStateEnumInstalled               PackageDesiredStateEnum = "INSTALLED"
	PackageDesiredStateEnumUpdated                 PackageDesiredStateEnum = "UPDATED"
	PackageDesiredStateEnumRemoved                 PackageDesiredStateEnum = "REMOVED"
)

type PackageManagerEnum string

const (
	PackageManagerEnumManagerUnspecified PackageManagerEnum = "MANAGER_UNSPECIFIED"
	PackageManagerEnumAny                PackageManagerEnum = "ANY"
	PackageManagerEnumApt                PackageManagerEnum = "APT"
	PackageManagerEnumYum                PackageManagerEnum = "YUM"
	PackageManagerEnumZypper             PackageManagerEnum = "ZYPPER"
	PackageManagerEnumGoo                PackageManagerEnum = "GOO"
)

type Package struct {
	DesiredState *PackageDesiredStateEnum `json:"desiredState"`
	Manager      *PackageManagerEnum      `json:"manager"`
	Name         *string                  `json:"name"`
}
