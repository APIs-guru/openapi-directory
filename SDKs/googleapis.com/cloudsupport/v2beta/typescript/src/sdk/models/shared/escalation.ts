import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EscalationReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED"
,    ResolutionTime = "RESOLUTION_TIME"
,    TechnicalExpertise = "TECHNICAL_EXPERTISE"
,    BusinessImpact = "BUSINESS_IMPACT"
}


// Escalation
/** 
 * An escalation of a support case.
**/
export class Escalation extends SpeakeasyBase {
  @Metadata({ data: "json, name=justification" })
  justification?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: EscalationReasonEnum;
}
