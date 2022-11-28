import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1GcsDocument
/** 
 * Specifies a document stored on Cloud Storage.
**/
export class GoogleCloudDocumentaiV1GcsDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
