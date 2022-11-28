import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";



// IntegerList
/** 
 * A metric value representing a list of integers.
**/
export class IntegerList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements", elemType: SplitInt64 })
  elements?: SplitInt64[];
}
