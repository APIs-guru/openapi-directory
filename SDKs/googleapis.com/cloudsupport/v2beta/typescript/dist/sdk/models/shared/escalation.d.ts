import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EscalationReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    ResolutionTime = "RESOLUTION_TIME",
    TechnicalExpertise = "TECHNICAL_EXPERTISE",
    BusinessImpact = "BUSINESS_IMPACT"
}
/**
 * An escalation of a support case.
**/
export declare class Escalation extends SpeakeasyBase {
    justification?: string;
    reason?: EscalationReasonEnum;
}
