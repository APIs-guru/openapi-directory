package shared

type GeoTargeting struct {
	Cities           []City       `json:"cities,omitempty"`
	Countries        []Country    `json:"countries,omitempty"`
	ExcludeCountries *bool        `json:"excludeCountries,omitempty"`
	Metros           []Metro      `json:"metros,omitempty"`
	PostalCodes      []PostalCode `json:"postalCodes,omitempty"`
	Regions          []Region     `json:"regions,omitempty"`
}
