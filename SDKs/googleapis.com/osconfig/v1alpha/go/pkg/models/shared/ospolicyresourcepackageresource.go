package shared

type OsPolicyResourcePackageResourceDesiredStateEnum string

const (
	OsPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified OsPolicyResourcePackageResourceDesiredStateEnum = "DESIRED_STATE_UNSPECIFIED"
	OsPolicyResourcePackageResourceDesiredStateEnumInstalled               OsPolicyResourcePackageResourceDesiredStateEnum = "INSTALLED"
	OsPolicyResourcePackageResourceDesiredStateEnumRemoved                 OsPolicyResourcePackageResourceDesiredStateEnum = "REMOVED"
)

// OsPolicyResourcePackageResource
// A resource that manages a system package.
type OsPolicyResourcePackageResource struct {
	Apt          *OsPolicyResourcePackageResourceApt              `json:"apt,omitempty"`
	Deb          *OsPolicyResourcePackageResourceDeb              `json:"deb,omitempty"`
	DesiredState *OsPolicyResourcePackageResourceDesiredStateEnum `json:"desiredState,omitempty"`
	Googet       *OsPolicyResourcePackageResourceGooGet           `json:"googet,omitempty"`
	Msi          *OsPolicyResourcePackageResourceMsi              `json:"msi,omitempty"`
	Rpm          *OsPolicyResourcePackageResourceRpm              `json:"rpm,omitempty"`
	Yum          *OsPolicyResourcePackageResourceYum              `json:"yum,omitempty"`
	Zypper       *OsPolicyResourcePackageResourceZypper           `json:"zypper,omitempty"`
}
