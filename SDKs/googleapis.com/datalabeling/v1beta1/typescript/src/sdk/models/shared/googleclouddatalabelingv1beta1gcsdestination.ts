import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1GcsDestination
/** 
 * Export destination of the data.Only gcs path is allowed in output_uri.
**/
export class GoogleCloudDatalabelingV1beta1GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=outputUri" })
  outputUri?: string;
}
