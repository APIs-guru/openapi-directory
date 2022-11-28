import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectedRange } from "./protectedrange";



// AddProtectedRangeResponse
/** 
 * The result of adding a new protected range.
**/
export class AddProtectedRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=protectedRange" })
  protectedRange?: ProtectedRange;
}
