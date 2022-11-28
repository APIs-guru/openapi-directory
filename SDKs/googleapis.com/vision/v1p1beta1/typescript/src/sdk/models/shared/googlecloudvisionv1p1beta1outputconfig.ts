import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1GcsDestination } from "./googlecloudvisionv1p1beta1gcsdestination";



// GoogleCloudVisionV1p1beta1OutputConfig
/** 
 * The desired output location and metadata.
**/
export class GoogleCloudVisionV1p1beta1OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination;
}
