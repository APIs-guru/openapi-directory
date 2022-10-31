package shared



type OpenAqCountriesResult struct {
    Meta *Meta `json:"meta,omitempty"`
    Results []CountriesRow `json:"results"`
    
}

