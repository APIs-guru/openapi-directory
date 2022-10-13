package shared

type OsPolicyResourcePackageResourceMsi struct {
	Properties []string              `json:"properties"`
	Source     *OsPolicyResourceFile `json:"source"`
}
