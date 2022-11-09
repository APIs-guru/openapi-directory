import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2CatalogAttribute } from "./googlecloudretailv2catalogattribute";

export enum GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
,    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
,    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}


// GoogleCloudRetailV2AttributesConfig
/** 
 * Catalog level attribute config.
**/
export class GoogleCloudRetailV2AttributesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeConfigLevel" })
  attributeConfigLevel?: GoogleCloudRetailV2AttributesConfigAttributeConfigLevelEnum;

  @Metadata({ data: "json, name=catalogAttributes", elemType: shared.GoogleCloudRetailV2CatalogAttribute })
  catalogAttributes?: Map<string, GoogleCloudRetailV2CatalogAttribute>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
