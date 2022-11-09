import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2ProductLevelConfig
/** 
 * Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
**/
export class GoogleCloudRetailV2ProductLevelConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingestionProductType" })
  ingestionProductType?: string;

  @Metadata({ data: "json, name=merchantCenterProductIdField" })
  merchantCenterProductIdField?: string;
}
