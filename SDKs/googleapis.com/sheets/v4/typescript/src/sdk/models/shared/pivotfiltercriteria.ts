import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooleanCondition } from "./booleancondition";


// PivotFilterCriteria
/** 
 * Criteria for showing/hiding rows in a pivot table.
**/
export class PivotFilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @Metadata({ data: "json, name=visibleByDefault" })
  visibleByDefault?: boolean;

  @Metadata({ data: "json, name=visibleValues" })
  visibleValues?: string[];
}
