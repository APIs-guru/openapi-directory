package shared

type ProductUpdateRequest struct {
	Categories        []string         `json:"categories"`
	Category          *CategoryDto     `json:"category"`
	Description       *string          `json:"description"`
	ExternalReference *string          `json:"externalReference"`
	ImageLookupKeys   []string         `json:"imageLookupKeys"`
	Metadata          *MetadataDto     `json:"metadata"`
	Name              string           `json:"name"`
	Presentation      *PresentationDto `json:"presentation"`
	TaxCode           *string          `json:"taxCode"`
	TaxExempt         *bool            `json:"taxExempt"`
	TaxRates          []string         `json:"taxRates"`
	UnitName          *string          `json:"unitName"`
	UUID              string           `json:"uuid"`
	VariantUuids      []string         `json:"variantUuids"`
	VatPercentage     *float64         `json:"vatPercentage"`
}
