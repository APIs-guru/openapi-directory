package shared

type OsPolicyResourcePackageResourceDeb struct {
	PullDeps *bool                 `json:"pullDeps,omitempty"`
	Source   *OsPolicyResourceFile `json:"source,omitempty"`
}
