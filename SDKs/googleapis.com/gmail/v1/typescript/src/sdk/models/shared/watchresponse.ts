import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WatchResponse
/** 
 * Push notification watch response.
**/
export class WatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;
}
