import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamedRange } from "./namedrange";


// AddNamedRangeRequest
/** 
 * Adds a named range to the spreadsheet.
**/
export class AddNamedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedRange" })
  namedRange?: NamedRange;
}
