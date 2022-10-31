package shared



type Address struct {
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    CountryCode *string `json:"countryCode,omitempty"`
    ExtendedAddress *string `json:"extendedAddress,omitempty"`
    FormattedType *string `json:"formattedType,omitempty"`
    FormattedValue *string `json:"formattedValue,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    PoBox *string `json:"poBox,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    Region *string `json:"region,omitempty"`
    StreetAddress *string `json:"streetAddress,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

