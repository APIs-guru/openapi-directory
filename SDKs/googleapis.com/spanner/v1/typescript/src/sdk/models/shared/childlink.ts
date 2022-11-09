import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChildLink
/** 
 * Metadata associated with a parent-child relationship appearing in a PlanNode.
**/
export class ChildLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=childIndex" })
  childIndex?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=variable" })
  variable?: string;
}
