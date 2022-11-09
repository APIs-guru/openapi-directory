import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaCatalogAttribute } from "./googlecloudretailv2betacatalogattribute";

export enum GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
,    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
,    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}


// GoogleCloudRetailV2betaAttributesConfig
/** 
 * Catalog level attribute config.
**/
export class GoogleCloudRetailV2betaAttributesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeConfigLevel" })
  attributeConfigLevel?: GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevelEnum;

  @Metadata({ data: "json, name=catalogAttributes", elemType: shared.GoogleCloudRetailV2betaCatalogAttribute })
  catalogAttributes?: Map<string, GoogleCloudRetailV2betaCatalogAttribute>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
