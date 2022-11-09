import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SplitInt64 } from "./splitint64";


// IntegerList
/** 
 * A metric value representing a list of integers.
**/
export class IntegerList extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements", elemType: shared.SplitInt64 })
  elements?: SplitInt64[];
}
