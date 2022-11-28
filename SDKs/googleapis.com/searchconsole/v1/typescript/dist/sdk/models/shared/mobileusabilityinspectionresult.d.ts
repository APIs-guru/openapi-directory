import { SpeakeasyBase } from "../../../internal/utils";
import { MobileUsabilityIssue } from "./mobileusabilityissue";
export declare enum MobileUsabilityInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * Mobile-usability inspection results.
**/
export declare class MobileUsabilityInspectionResult extends SpeakeasyBase {
    issues?: MobileUsabilityIssue[];
    verdict?: MobileUsabilityInspectionResultVerdictEnum;
}
