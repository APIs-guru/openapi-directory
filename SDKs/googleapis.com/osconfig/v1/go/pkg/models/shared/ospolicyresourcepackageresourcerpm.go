package shared

type OsPolicyResourcePackageResourceRpm struct {
	PullDeps *bool                 `json:"pullDeps,omitempty"`
	Source   *OsPolicyResourceFile `json:"source,omitempty"`
}
