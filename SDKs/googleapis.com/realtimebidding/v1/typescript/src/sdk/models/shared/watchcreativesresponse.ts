import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WatchCreativesResponse
/** 
 * A response for the request to receive push notification when a bidder's creatives change status.
**/
export class WatchCreativesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription" })
  subscription?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
