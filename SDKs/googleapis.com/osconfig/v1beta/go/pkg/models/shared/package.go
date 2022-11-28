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

// Package
// Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`
type Package struct {
	DesiredState *PackageDesiredStateEnum `json:"desiredState,omitempty"`
	Manager      *PackageManagerEnum      `json:"manager,omitempty"`
	Name         *string                  `json:"name,omitempty"`
}
