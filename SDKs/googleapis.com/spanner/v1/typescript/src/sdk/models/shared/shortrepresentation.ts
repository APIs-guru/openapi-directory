import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShortRepresentation
/** 
 * Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).
**/
export class ShortRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=subqueries" })
  subqueries?: Map<string, number>;
}
