import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WatchResponse
/** 
 * Push notification watch response.
**/
export class WatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration" })
  expiration?: string;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;
}
