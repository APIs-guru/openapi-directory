package shared

type AnalyzePackagesRequestV1 struct {
	IncludeOsvData *bool         `json:"includeOsvData"`
	Packages       []PackageData `json:"packages"`
	ResourceURI    *string       `json:"resourceUri"`
}
