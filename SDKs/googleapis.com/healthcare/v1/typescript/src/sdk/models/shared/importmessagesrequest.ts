import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsSource } from "./gcssource";


// ImportMessagesRequest
/** 
 * Request to import messages.
**/
export class ImportMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
