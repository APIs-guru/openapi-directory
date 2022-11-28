import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalogAttribute } from "./googlecloudretailv2betacatalogattribute";
export declare enum GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG",
    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}
/**
 * Catalog level attribute config.
**/
export declare class GoogleCloudRetailV2betaAttributesConfig extends SpeakeasyBase {
    attributeConfigLevel?: GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum;
    catalogAttributes?: Map<string, GoogleCloudRetailV2betaCatalogAttribute>;
    name?: string;
}
