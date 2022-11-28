package shared

// OsPolicyResourcePackageResourceMsi
// An MSI package. MSI packages only support INSTALLED state.
type OsPolicyResourcePackageResourceMsi struct {
	Properties []string              `json:"properties,omitempty"`
	Source     *OsPolicyResourceFile `json:"source,omitempty"`
}
