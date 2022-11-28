import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChildLink
/** 
 * Metadata associated with a parent-child relationship appearing in a PlanNode.
**/
export class ChildLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childIndex" })
  childIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=variable" })
  variable?: string;
}
