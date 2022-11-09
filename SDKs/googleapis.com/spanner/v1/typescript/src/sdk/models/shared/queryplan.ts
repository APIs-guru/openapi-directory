import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanNode } from "./plannode";


// QueryPlan
/** 
 * Contains an ordered list of nodes appearing in the query plan.
**/
export class QueryPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=planNodes", elemType: shared.PlanNode })
  planNodes?: PlanNode[];
}
