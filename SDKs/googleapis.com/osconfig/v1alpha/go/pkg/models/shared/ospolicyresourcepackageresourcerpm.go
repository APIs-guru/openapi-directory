package shared

// OsPolicyResourcePackageResourceRpm
// An RPM package file. RPM packages only support INSTALLED state.
type OsPolicyResourcePackageResourceRpm struct {
	PullDeps *bool                 `json:"pullDeps,omitempty"`
	Source   *OsPolicyResourceFile `json:"source,omitempty"`
}
