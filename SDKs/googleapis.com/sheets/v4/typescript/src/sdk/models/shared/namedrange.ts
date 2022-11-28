import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";



// NamedRange
/** 
 * A named range.
**/
export class NamedRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;
}
