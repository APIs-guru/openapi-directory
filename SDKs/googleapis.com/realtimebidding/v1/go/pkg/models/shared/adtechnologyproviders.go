package shared

type AdTechnologyProviders struct {
	DetectedGvlIds              []string `json:"detectedGvlIds"`
	DetectedProviderIds         []string `json:"detectedProviderIds"`
	UnidentifiedProviderDomains []string `json:"unidentifiedProviderDomains"`
}
