import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1GcsDestination
/** 
 * Export destination of the data.Only gcs path is allowed in output_uri.
**/
export class GoogleCloudDatalabelingV1beta1GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;
}
