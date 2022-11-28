import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination } from "./googlecloudassetv1queryassetsoutputconfigbigquerydestination";



// QueryAssetsOutputConfig
/** 
 * Output configuration query assets.
**/
export class QueryAssetsOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination;
}
