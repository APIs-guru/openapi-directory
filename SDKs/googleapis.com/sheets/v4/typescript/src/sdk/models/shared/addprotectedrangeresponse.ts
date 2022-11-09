import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectedRange } from "./protectedrange";


// AddProtectedRangeResponse
/** 
 * The result of adding a new protected range.
**/
export class AddProtectedRangeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=protectedRange" })
  protectedRange?: ProtectedRange;
}
