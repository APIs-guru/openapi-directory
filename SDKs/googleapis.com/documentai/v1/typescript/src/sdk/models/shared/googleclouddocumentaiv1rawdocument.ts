import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1RawDocument
/** 
 * Payload message of raw document content (bytes).
**/
export class GoogleCloudDocumentaiV1RawDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
