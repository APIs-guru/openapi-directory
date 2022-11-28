package shared

// AnalyzePackagesRequestV1
// AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
type AnalyzePackagesRequestV1 struct {
	IncludeOsvData *bool         `json:"includeOsvData,omitempty"`
	Packages       []PackageData `json:"packages,omitempty"`
	ResourceURI    *string       `json:"resourceUri,omitempty"`
}
