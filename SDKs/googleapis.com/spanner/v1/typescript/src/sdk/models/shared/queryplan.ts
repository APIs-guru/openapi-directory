import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanNode } from "./plannode";



// QueryPlan
/** 
 * Contains an ordered list of nodes appearing in the query plan.
**/
export class QueryPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=planNodes", elemType: PlanNode })
  planNodes?: PlanNode[];
}
