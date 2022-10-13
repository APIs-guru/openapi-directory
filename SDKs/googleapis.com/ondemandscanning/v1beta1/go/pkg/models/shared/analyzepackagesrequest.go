package shared

type AnalyzePackagesRequest struct {
	Packages    []PackageData `json:"packages"`
	ResourceURI *string       `json:"resourceUri"`
}
