import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";


// CreateNamedRangeRequest
/** 
 * Creates a NamedRange referencing the given range.
**/
export class CreateNamedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=range" })
  range?: Range;
}
