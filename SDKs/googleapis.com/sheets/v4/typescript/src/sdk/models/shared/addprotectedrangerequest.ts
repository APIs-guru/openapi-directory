import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectedRange } from "./protectedrange";



// AddProtectedRangeRequest
/** 
 * Adds a new protected range.
**/
export class AddProtectedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=protectedRange" })
  protectedRange?: ProtectedRange;
}
