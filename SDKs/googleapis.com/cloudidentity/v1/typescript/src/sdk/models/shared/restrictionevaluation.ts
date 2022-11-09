import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RestrictionEvaluationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Evaluating = "EVALUATING"
,    Compliant = "COMPLIANT"
,    ForwardCompliant = "FORWARD_COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
}


// RestrictionEvaluation
/** 
 * The evaluated state of this restriction.
**/
export class RestrictionEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: RestrictionEvaluationStateEnum;
}
