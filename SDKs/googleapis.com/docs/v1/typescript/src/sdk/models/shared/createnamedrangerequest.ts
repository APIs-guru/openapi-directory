import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";



// CreateNamedRangeRequest
/** 
 * Creates a NamedRange referencing the given range.
**/
export class CreateNamedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;
}
