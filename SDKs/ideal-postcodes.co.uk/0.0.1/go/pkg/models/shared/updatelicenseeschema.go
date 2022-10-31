package shared



type UpdateLicenseeSchema struct {
    Address *string `json:"address,omitempty"`
    Daily *CreateLicenseeDaily `json:"daily,omitempty"`
    Postcode *string `json:"postcode,omitempty"`
    Whitelist []string `json:"whitelist,omitempty"`
    
}

