package shared

type GeoTaxonomyTypeEnum string

const (
	GeoTaxonomyTypeEnumTypeUnspecified GeoTaxonomyTypeEnum = "TYPE_UNSPECIFIED"
	GeoTaxonomyTypeEnumGlobal          GeoTaxonomyTypeEnum = "GLOBAL"
	GeoTaxonomyTypeEnumRegional        GeoTaxonomyTypeEnum = "REGIONAL"
	GeoTaxonomyTypeEnumMultiRegional   GeoTaxonomyTypeEnum = "MULTI_REGIONAL"
)

// GeoTaxonomy
// Encapsulates the geographic taxonomy data for a sku.
type GeoTaxonomy struct {
	Regions []string             `json:"regions,omitempty"`
	Type    *GeoTaxonomyTypeEnum `json:"type,omitempty"`
}
