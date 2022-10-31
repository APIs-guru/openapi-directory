package shared



type Licensee struct {
    Address *string `json:"address,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    Daily *LicenseeDaily `json:"daily,omitempty"`
    ID *string `json:"id,omitempty"`
    Key *string `json:"key,omitempty"`
    Name *string `json:"name,omitempty"`
    Postcode *string `json:"postcode,omitempty"`
    Whitelist []string `json:"whitelist,omitempty"`
    
}

