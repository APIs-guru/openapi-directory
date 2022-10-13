package shared

type OsPolicyResourcePackageResourceRpm struct {
	PullDeps *bool                 `json:"pullDeps"`
	Source   *OsPolicyResourceFile `json:"source"`
}
