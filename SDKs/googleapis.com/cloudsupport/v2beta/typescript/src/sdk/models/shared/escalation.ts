import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EscalationReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    ResolutionTime = "RESOLUTION_TIME",
    TechnicalExpertise = "TECHNICAL_EXPERTISE",
    BusinessImpact = "BUSINESS_IMPACT"
}


// Escalation
/** 
 * An escalation of a support case.
**/
export class Escalation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=justification" })
  justification?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: EscalationReasonEnum;
}
