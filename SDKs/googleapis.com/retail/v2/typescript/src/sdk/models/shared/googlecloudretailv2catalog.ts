import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2ProductLevelConfig } from "./googlecloudretailv2productlevelconfig";


// GoogleCloudRetailV2Catalog
/** 
 * The catalog configuration.
**/
export class GoogleCloudRetailV2Catalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productLevelConfig" })
  productLevelConfig?: GoogleCloudRetailV2ProductLevelConfig;
}
