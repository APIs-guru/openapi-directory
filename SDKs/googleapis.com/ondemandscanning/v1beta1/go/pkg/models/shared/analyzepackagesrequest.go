package shared

// AnalyzePackagesRequest
// AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
type AnalyzePackagesRequest struct {
	Packages    []PackageData `json:"packages,omitempty"`
	ResourceURI *string       `json:"resourceUri,omitempty"`
}
