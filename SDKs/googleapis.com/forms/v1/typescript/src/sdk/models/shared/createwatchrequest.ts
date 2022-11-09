import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Watch } from "./watch";


// CreateWatchRequest
/** 
 * Create a new watch.
**/
export class CreateWatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=watch" })
  watch?: Watch;

  @Metadata({ data: "json, name=watchId" })
  watchId?: string;
}
