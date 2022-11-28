import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";



// ImportMessagesRequest
/** 
 * Request to import messages.
**/
export class ImportMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
