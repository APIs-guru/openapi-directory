import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";



// PivotFilterCriteria
/** 
 * Criteria for showing/hiding rows in a pivot table.
**/
export class PivotFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @SpeakeasyMetadata({ data: "json, name=visibleByDefault" })
  visibleByDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visibleValues" })
  visibleValues?: string[];
}
