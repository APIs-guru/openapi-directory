package shared

type OsPolicyResourcePackageResourceDesiredStateEnum string

const (
	OsPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified OsPolicyResourcePackageResourceDesiredStateEnum = "DESIRED_STATE_UNSPECIFIED"
	OsPolicyResourcePackageResourceDesiredStateEnumInstalled               OsPolicyResourcePackageResourceDesiredStateEnum = "INSTALLED"
	OsPolicyResourcePackageResourceDesiredStateEnumRemoved                 OsPolicyResourcePackageResourceDesiredStateEnum = "REMOVED"
)

type OsPolicyResourcePackageResource struct {
	Apt          *OsPolicyResourcePackageResourceApt              `json:"apt"`
	Deb          *OsPolicyResourcePackageResourceDeb              `json:"deb"`
	DesiredState *OsPolicyResourcePackageResourceDesiredStateEnum `json:"desiredState"`
	Googet       *OsPolicyResourcePackageResourceGooGet           `json:"googet"`
	Msi          *OsPolicyResourcePackageResourceMsi              `json:"msi"`
	Rpm          *OsPolicyResourcePackageResourceRpm              `json:"rpm"`
	Yum          *OsPolicyResourcePackageResourceYum              `json:"yum"`
	Zypper       *OsPolicyResourcePackageResourceZypper           `json:"zypper"`
}
