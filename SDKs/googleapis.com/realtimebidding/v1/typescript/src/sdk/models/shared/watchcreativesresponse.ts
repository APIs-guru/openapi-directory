import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WatchCreativesResponse
/** 
 * A response for the request to receive push notification when a bidder's creatives change status.
**/
export class WatchCreativesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
