import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3RawDocument
/** 
 * Payload message of raw document content (bytes).
**/
export class GoogleCloudDocumentaiV1beta3RawDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
