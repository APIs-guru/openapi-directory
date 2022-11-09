import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Matter } from "./matter";


// CloseMatterResponse
/** 
 * Response to a CloseMatterRequest.
**/
export class CloseMatterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matter" })
  matter?: Matter;
}
