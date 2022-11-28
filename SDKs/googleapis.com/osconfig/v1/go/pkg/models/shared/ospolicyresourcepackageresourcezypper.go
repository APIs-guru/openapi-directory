package shared

// OsPolicyResourcePackageResourceZypper
// A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
type OsPolicyResourcePackageResourceZypper struct {
	Name *string `json:"name,omitempty"`
}
