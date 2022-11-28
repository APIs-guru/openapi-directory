import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedRange } from "./namedrange";



// AddNamedRangeResponse
/** 
 * The result of adding a named range.
**/
export class AddNamedRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namedRange" })
  namedRange?: NamedRange;
}
