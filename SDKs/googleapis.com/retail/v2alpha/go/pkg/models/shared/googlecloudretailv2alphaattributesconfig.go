package shared

type GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum string

const (
	GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnumAttributeConfigLevelUnspecified GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
	GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnumProductLevelAttributeConfig     GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
	GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnumCatalogLevelAttributeConfig     GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
)

type GoogleCloudRetailV2alphaAttributesConfig struct {
	AttributeConfigLevel *GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum `json:"attributeConfigLevel,omitempty"`
	CatalogAttributes    map[string]GoogleCloudRetailV2alphaCatalogAttribute               `json:"catalogAttributes,omitempty"`
	Name                 *string                                                           `json:"name,omitempty"`
}
