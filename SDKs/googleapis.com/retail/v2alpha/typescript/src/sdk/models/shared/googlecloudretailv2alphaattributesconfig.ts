import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaCatalogAttribute } from "./googlecloudretailv2alphacatalogattribute";

export enum GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED"
,    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG"
,    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}


// GoogleCloudRetailV2alphaAttributesConfig
/** 
 * Catalog level attribute config.
**/
export class GoogleCloudRetailV2alphaAttributesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeConfigLevel" })
  attributeConfigLevel?: GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum;

  @Metadata({ data: "json, name=catalogAttributes", elemType: shared.GoogleCloudRetailV2alphaCatalogAttribute })
  catalogAttributes?: Map<string, GoogleCloudRetailV2alphaCatalogAttribute>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
