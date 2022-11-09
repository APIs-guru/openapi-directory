import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShortRepresentation
/** 
 * Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).
**/
export class ShortRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=subqueries" })
  subqueries?: Map<string, number>;
}
