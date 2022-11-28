package shared

type GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum string

const (
	GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnumAttributeConfigLevelUnspecified GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
	GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnumProductLevelAttributeConfig     GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
	GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnumCatalogLevelAttributeConfig     GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
)

// GoogleCloudRetailV2AttributesConfig
// Catalog level attribute config.
type GoogleCloudRetailV2AttributesConfig struct {
	AttributeConfigLevel *GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum `json:"attributeConfigLevel,omitempty"`
	CatalogAttributes    map[string]GoogleCloudRetailV2CatalogAttribute               `json:"catalogAttributes,omitempty"`
	Name                 *string                                                      `json:"name,omitempty"`
}
