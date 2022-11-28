import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";



// ListTriggersResponse
/** 
 * List triggers response.
**/
export class ListTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger", elemType: Trigger })
  trigger?: Trigger[];
}
