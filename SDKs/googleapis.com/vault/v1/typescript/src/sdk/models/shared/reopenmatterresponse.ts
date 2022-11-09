import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Matter } from "./matter";


// ReopenMatterResponse
/** 
 * Response to a ReopenMatterRequest.
**/
export class ReopenMatterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matter" })
  matter?: Matter;
}
