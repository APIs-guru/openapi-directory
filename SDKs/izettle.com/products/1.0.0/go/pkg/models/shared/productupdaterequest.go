package shared



type ProductUpdateRequest struct {
    Categories []string `json:"categories,omitempty"`
    Category *CategoryDto `json:"category,omitempty"`
    Description *string `json:"description,omitempty"`
    ExternalReference *string `json:"externalReference,omitempty"`
    ImageLookupKeys []string `json:"imageLookupKeys,omitempty"`
    Metadata *MetadataDto `json:"metadata,omitempty"`
    Name string `json:"name"`
    Presentation *PresentationDto `json:"presentation,omitempty"`
    TaxCode *string `json:"taxCode,omitempty"`
    TaxExempt *bool `json:"taxExempt,omitempty"`
    TaxRates []string `json:"taxRates,omitempty"`
    UnitName *string `json:"unitName,omitempty"`
    UUID string `json:"uuid"`
    VariantUuids []string `json:"variantUuids"`
    VatPercentage *float64 `json:"vatPercentage,omitempty"`
    
}

