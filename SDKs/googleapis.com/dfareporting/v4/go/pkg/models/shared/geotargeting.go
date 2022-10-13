package shared

type GeoTargeting struct {
	Cities           []City       `json:"cities"`
	Countries        []Country    `json:"countries"`
	ExcludeCountries *bool        `json:"excludeCountries"`
	Metros           []Metro      `json:"metros"`
	PostalCodes      []PostalCode `json:"postalCodes"`
	Regions          []Region     `json:"regions"`
}
