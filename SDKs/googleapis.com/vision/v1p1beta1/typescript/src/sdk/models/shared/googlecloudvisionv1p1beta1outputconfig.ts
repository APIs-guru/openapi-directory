import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p1beta1GcsDestination } from "./googlecloudvisionv1p1beta1gcsdestination";


// GoogleCloudVisionV1p1beta1OutputConfig
/** 
 * The desired output location and metadata.
**/
export class GoogleCloudVisionV1p1beta1OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination;
}
