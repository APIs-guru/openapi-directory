import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalogAttribute } from "./googlecloudretailv2alphacatalogattribute";


export enum GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG",
    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}


// GoogleCloudRetailV2alphaAttributesConfig
/** 
 * Catalog level attribute config.
**/
export class GoogleCloudRetailV2alphaAttributesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeConfigLevel" })
  attributeConfigLevel?: GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=catalogAttributes", elemType: GoogleCloudRetailV2alphaCatalogAttribute })
  catalogAttributes?: Map<string, GoogleCloudRetailV2alphaCatalogAttribute>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
