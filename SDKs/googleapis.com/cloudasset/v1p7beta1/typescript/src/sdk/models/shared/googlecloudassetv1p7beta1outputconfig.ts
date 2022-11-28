import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p7beta1BigQueryDestination } from "./googlecloudassetv1p7beta1bigquerydestination";
import { GoogleCloudAssetV1p7beta1GcsDestination } from "./googlecloudassetv1p7beta1gcsdestination";



// GoogleCloudAssetV1p7beta1OutputConfig
/** 
 * Output configuration for export assets destination.
**/
export class GoogleCloudAssetV1p7beta1OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudAssetV1p7beta1BigQueryDestination;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudAssetV1p7beta1GcsDestination;
}
