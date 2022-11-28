import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WatchInput } from "./watch";



// CreateWatchRequestInput
/** 
 * Create a new watch.
**/
export class CreateWatchRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=watch" })
  watch?: WatchInput;

  @SpeakeasyMetadata({ data: "json, name=watchId" })
  watchId?: string;
}
