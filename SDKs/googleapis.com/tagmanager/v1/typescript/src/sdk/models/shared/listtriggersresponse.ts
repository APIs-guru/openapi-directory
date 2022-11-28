import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";



// ListTriggersResponse
/** 
 * List triggers response.
**/
export class ListTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: Trigger })
  triggers?: Trigger[];
}
