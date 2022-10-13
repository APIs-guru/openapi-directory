package shared

import (
	"time"
)

type ProductResponse struct {
	Categories               []string                  `json:"categories"`
	Category                 *CategoryDto              `json:"category"`
	Created                  time.Time                 `json:"created"`
	Description              *string                   `json:"description"`
	Etag                     string                    `json:"etag"`
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
	Updated                  time.Time                 `json:"updated"`
	UpdatedBy                *string                   `json:"updatedBy"`
	UUID                     string                    `json:"uuid"`
	VariantOptionDefinitions *VariantOptionDefinitions `json:"variantOptionDefinitions"`
	Variants                 []VariantDto              `json:"variants"`
	VatPercentage            *float64                  `json:"vatPercentage"`
}
