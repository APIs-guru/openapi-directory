import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MatchedUrl
/** 
 * A matched url in a Chat message. Chat apps can preview matched URLs. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
**/
export class MatchedUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
