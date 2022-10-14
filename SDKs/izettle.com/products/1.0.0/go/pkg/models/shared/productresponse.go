package shared

import (
	"time"
)

type ProductResponse struct {
	Categories               []string                  `json:"categories,omitempty"`
	Category                 *CategoryDto              `json:"category,omitempty"`
	Created                  time.Time                 `json:"created"`
	Description              *string                   `json:"description,omitempty"`
	Etag                     string                    `json:"etag"`
	ExternalReference        *string                   `json:"externalReference,omitempty"`
	ImageLookupKeys          []string                  `json:"imageLookupKeys,omitempty"`
	Metadata                 *MetadataDto              `json:"metadata,omitempty"`
	Name                     string                    `json:"name"`
	Online                   *OnlineProperties         `json:"online,omitempty"`
	Presentation             *PresentationDto          `json:"presentation,omitempty"`
	TaxCode                  *string                   `json:"taxCode,omitempty"`
	TaxExempt                *bool                     `json:"taxExempt,omitempty"`
	TaxRates                 []string                  `json:"taxRates,omitempty"`
	UnitName                 *string                   `json:"unitName,omitempty"`
	Updated                  time.Time                 `json:"updated"`
	UpdatedBy                *string                   `json:"updatedBy,omitempty"`
	UUID                     string                    `json:"uuid"`
	VariantOptionDefinitions *VariantOptionDefinitions `json:"variantOptionDefinitions,omitempty"`
	Variants                 []VariantDto              `json:"variants"`
	VatPercentage            *float64                  `json:"vatPercentage,omitempty"`
}
