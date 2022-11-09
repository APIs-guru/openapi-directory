import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamedRange } from "./namedrange";


// AddNamedRangeResponse
/** 
 * The result of adding a named range.
**/
export class AddNamedRangeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedRange" })
  namedRange?: NamedRange;
}
