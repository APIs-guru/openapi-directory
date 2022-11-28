import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3GcsDocument
/** 
 * Specifies a document stored on Cloud Storage.
**/
export class GoogleCloudDocumentaiV1beta3GcsDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
