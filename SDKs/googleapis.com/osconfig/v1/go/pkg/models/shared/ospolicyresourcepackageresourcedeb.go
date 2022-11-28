package shared

// OsPolicyResourcePackageResourceDeb
// A deb package file. dpkg packages only support INSTALLED state.
type OsPolicyResourcePackageResourceDeb struct {
	PullDeps *bool                 `json:"pullDeps,omitempty"`
	Source   *OsPolicyResourceFile `json:"source,omitempty"`
}
