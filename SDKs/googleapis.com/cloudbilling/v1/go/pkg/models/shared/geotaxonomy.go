package shared




type GeoTaxonomyTypeEnum string

const (
    GeoTaxonomyTypeEnumTypeUnspecified GeoTaxonomyTypeEnum = "TYPE_UNSPECIFIED"
GeoTaxonomyTypeEnumGlobal GeoTaxonomyTypeEnum = "GLOBAL"
GeoTaxonomyTypeEnumRegional GeoTaxonomyTypeEnum = "REGIONAL"
GeoTaxonomyTypeEnumMultiRegional GeoTaxonomyTypeEnum = "MULTI_REGIONAL"
)


type GeoTaxonomy struct {
    Regions []string `json:"regions,omitempty"`
    Type *GeoTaxonomyTypeEnum `json:"type,omitempty"`
    
}

