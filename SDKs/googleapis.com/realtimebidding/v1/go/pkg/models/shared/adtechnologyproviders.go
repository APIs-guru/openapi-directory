package shared



type AdTechnologyProviders struct {
    DetectedGvlIds []string `json:"detectedGvlIds,omitempty"`
    DetectedProviderIds []string `json:"detectedProviderIds,omitempty"`
    UnidentifiedProviderDomains []string `json:"unidentifiedProviderDomains,omitempty"`
    
}

