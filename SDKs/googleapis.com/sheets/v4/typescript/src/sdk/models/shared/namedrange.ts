import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";


// NamedRange
/** 
 * A named range.
**/
export class NamedRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;
}
