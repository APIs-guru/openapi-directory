import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Documentation
/** 
 * A content string and a MIME type that describes the content string's format.
**/
export class Documentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
