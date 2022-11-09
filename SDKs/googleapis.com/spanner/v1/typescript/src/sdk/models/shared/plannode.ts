import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChildLink } from "./childlink";
import { ShortRepresentation } from "./shortrepresentation";

export enum PlanNodeKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED"
,    Relational = "RELATIONAL"
,    Scalar = "SCALAR"
}


// PlanNode
/** 
 * Node information for nodes appearing in a QueryPlan.plan_nodes.
**/
export class PlanNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=childLinks", elemType: shared.ChildLink })
  childLinks?: ChildLink[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=executionStats" })
  executionStats?: Map<string, any>;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: PlanNodeKindEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=shortRepresentation" })
  shortRepresentation?: ShortRepresentation;
}
