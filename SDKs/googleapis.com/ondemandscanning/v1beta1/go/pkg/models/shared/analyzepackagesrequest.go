package shared



type AnalyzePackagesRequest struct {
    Packages []PackageData `json:"packages,omitempty"`
    ResourceURI *string `json:"resourceUri,omitempty"`
    
}

