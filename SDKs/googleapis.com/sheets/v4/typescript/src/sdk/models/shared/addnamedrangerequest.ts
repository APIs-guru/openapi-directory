import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedRange } from "./namedrange";



// AddNamedRangeRequest
/** 
 * Adds a named range to the spreadsheet.
**/
export class AddNamedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namedRange" })
  namedRange?: NamedRange;
}
