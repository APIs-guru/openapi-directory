import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildLink } from "./childlink";
import { ShortRepresentation } from "./shortrepresentation";


export enum PlanNodeKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    Relational = "RELATIONAL",
    Scalar = "SCALAR"
}


// PlanNode
/** 
 * Node information for nodes appearing in a QueryPlan.plan_nodes.
**/
export class PlanNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childLinks", elemType: ChildLink })
  childLinks?: ChildLink[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionStats" })
  executionStats?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: PlanNodeKindEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=shortRepresentation" })
  shortRepresentation?: ShortRepresentation;
}
