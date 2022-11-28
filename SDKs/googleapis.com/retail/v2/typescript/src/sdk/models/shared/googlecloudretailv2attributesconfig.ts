import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CatalogAttribute } from "./googlecloudretailv2catalogattribute";


export enum GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG",
    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}


// GoogleCloudRetailV2AttributesConfig
/** 
 * Catalog level attribute config.
**/
export class GoogleCloudRetailV2AttributesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeConfigLevel" })
  attributeConfigLevel?: GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=catalogAttributes", elemType: GoogleCloudRetailV2CatalogAttribute })
  catalogAttributes?: Map<string, GoogleCloudRetailV2CatalogAttribute>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
