import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalogAttribute } from "./googlecloudretailv2betacatalogattribute";


export enum GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG",
    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}


// GoogleCloudRetailV2betaAttributesConfig
/** 
 * Catalog level attribute config.
**/
export class GoogleCloudRetailV2betaAttributesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeConfigLevel" })
  attributeConfigLevel?: GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=catalogAttributes", elemType: GoogleCloudRetailV2betaCatalogAttribute })
  catalogAttributes?: Map<string, GoogleCloudRetailV2betaCatalogAttribute>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
