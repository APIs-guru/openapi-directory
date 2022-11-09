import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1GcsSource
/** 
 * Source of the Cloud Storage file to be imported.
**/
export class GoogleCloudDatalabelingV1beta1GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
