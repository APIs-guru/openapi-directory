import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CatalogAttribute } from "./googlecloudretailv2catalogattribute";
export declare enum GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG",
    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}
/**
 * Catalog level attribute config.
**/
export declare class GoogleCloudRetailV2AttributesConfig extends SpeakeasyBase {
    attributeConfigLevel?: GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum;
    catalogAttributes?: Map<string, GoogleCloudRetailV2CatalogAttribute>;
    name?: string;
}
