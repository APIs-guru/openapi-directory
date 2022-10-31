package shared

type AnalyzePackagesRequestV1 struct {
	IncludeOsvData *bool         `json:"includeOsvData,omitempty"`
	Packages       []PackageData `json:"packages,omitempty"`
	ResourceURI    *string       `json:"resourceUri,omitempty"`
}
