package shared

type GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum string

const (
	GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnumAttributeConfigLevelUnspecified GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
	GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnumProductLevelAttributeConfig     GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
	GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnumCatalogLevelAttributeConfig     GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
)

type GoogleCloudRetailV2betaAttributesConfig struct {
	AttributeConfigLevel *GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum `json:"attributeConfigLevel"`
	CatalogAttributes    map[string]GoogleCloudRetailV2betaCatalogAttribute               `json:"catalogAttributes"`
	Name                 *string                                                          `json:"name"`
}
