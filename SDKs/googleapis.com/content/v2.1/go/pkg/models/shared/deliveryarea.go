package shared



type DeliveryArea struct {
    CountryCode *string `json:"countryCode,omitempty"`
    PostalCodeRange *DeliveryAreaPostalCodeRange `json:"postalCodeRange,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    
}

