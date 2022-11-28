import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Documentation
/** 
 * A content string and a MIME type that describes the content string's format.
**/
export class Documentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
