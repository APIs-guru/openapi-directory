package shared

// OsPolicyResourcePackageResourceYum
// A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
type OsPolicyResourcePackageResourceYum struct {
	Name *string `json:"name,omitempty"`
}
