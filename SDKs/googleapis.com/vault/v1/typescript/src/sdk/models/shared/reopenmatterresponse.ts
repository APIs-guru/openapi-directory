import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Matter } from "./matter";



// ReopenMatterResponse
/** 
 * Response to a ReopenMatterRequest.
**/
export class ReopenMatterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matter" })
  matter?: Matter;
}
