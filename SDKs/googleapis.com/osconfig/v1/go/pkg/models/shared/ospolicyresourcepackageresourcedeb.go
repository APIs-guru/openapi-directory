package shared

type OsPolicyResourcePackageResourceDeb struct {
	PullDeps *bool                 `json:"pullDeps"`
	Source   *OsPolicyResourceFile `json:"source"`
}
