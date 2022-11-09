import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectedRange } from "./protectedrange";


// AddProtectedRangeRequest
/** 
 * Adds a new protected range.
**/
export class AddProtectedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=protectedRange" })
  protectedRange?: ProtectedRange;
}
