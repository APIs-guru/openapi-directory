package shared

// OsPolicyResourcePackageResourceApt
// A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`
type OsPolicyResourcePackageResourceApt struct {
	Name *string `json:"name,omitempty"`
}
