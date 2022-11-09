import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaProductLevelConfig
/** 
 * Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
**/
export class GoogleCloudRetailV2betaProductLevelConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingestionProductType" })
  ingestionProductType?: string;

  @Metadata({ data: "json, name=merchantCenterProductIdField" })
  merchantCenterProductIdField?: string;
}
