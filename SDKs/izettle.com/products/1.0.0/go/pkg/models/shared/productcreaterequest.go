package shared

type ProductCreateRequest struct {
	Categories               []string                  `json:"categories"`
	Category                 *CategoryDto              `json:"category"`
	CreateWithDefaultTax     *bool                     `json:"createWithDefaultTax"`
	Description              *string                   `json:"description"`
	ExternalReference        *string                   `json:"externalReference"`
	ImageLookupKeys          []string                  `json:"imageLookupKeys"`
	Metadata                 *MetadataDto              `json:"metadata"`
	Name                     string                    `json:"name"`
	Online                   *OnlineProperties         `json:"online"`
	Presentation             *PresentationDto          `json:"presentation"`
	TaxCode                  *string                   `json:"taxCode"`
	TaxExempt                *bool                     `json:"taxExempt"`
	TaxRates                 []string                  `json:"taxRates"`
	UnitName                 *string                   `json:"unitName"`
	UUID                     string                    `json:"uuid"`
	VariantOptionDefinitions *VariantOptionDefinitions `json:"variantOptionDefinitions"`
	Variants                 []VariantDto              `json:"variants"`
	VatPercentage            *float64                  `json:"vatPercentage"`
}
