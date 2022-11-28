import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValueCount
/** 
 * Tuple for how many times an Expression was evaluated to a particular ExpressionValue.
**/
export class ValueCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
