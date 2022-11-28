import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalogAttribute } from "./googlecloudretailv2alphacatalogattribute";
export declare enum GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG",
    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}
/**
 * Catalog level attribute config.
**/
export declare class GoogleCloudRetailV2alphaAttributesConfig extends SpeakeasyBase {
    attributeConfigLevel?: GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum;
    catalogAttributes?: Map<string, GoogleCloudRetailV2alphaCatalogAttribute>;
    name?: string;
}
