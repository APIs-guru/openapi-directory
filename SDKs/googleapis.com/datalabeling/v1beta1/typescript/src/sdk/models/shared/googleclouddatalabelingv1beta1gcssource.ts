import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1GcsSource
/** 
 * Source of the Cloud Storage file to be imported.
**/
export class GoogleCloudDatalabelingV1beta1GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
