import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ProductLevelConfig } from "./googlecloudretailv2productlevelconfig";



// GoogleCloudRetailV2Catalog
/** 
 * The catalog configuration.
**/
export class GoogleCloudRetailV2Catalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productLevelConfig" })
  productLevelConfig?: GoogleCloudRetailV2ProductLevelConfig;
}
