import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1GcsDocument
/** 
 * Specifies a document stored on Cloud Storage.
**/
export class GoogleCloudDocumentaiV1GcsDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
