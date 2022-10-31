package shared



type CountriesListResponse struct {
    Countries []Country `json:"countries,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

