package shared



type RepresentativeInfoResponse struct {
    Divisions map[string]GeographicDivision `json:"divisions,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NormalizedInput *SimpleAddressType `json:"normalizedInput,omitempty"`
    Offices []Office `json:"offices,omitempty"`
    Officials []Official `json:"officials,omitempty"`
    
}

