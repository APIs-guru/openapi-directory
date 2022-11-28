import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Matter } from "./matter";



// CloseMatterResponse
/** 
 * Response to a CloseMatterRequest.
**/
export class CloseMatterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matter" })
  matter?: Matter;
}
