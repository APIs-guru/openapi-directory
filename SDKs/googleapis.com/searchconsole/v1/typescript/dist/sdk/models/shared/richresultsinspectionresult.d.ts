import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectedItems } from "./detecteditems";
export declare enum RichResultsInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * Rich-Results inspection result, including any rich results found at this URL.
**/
export declare class RichResultsInspectionResult extends SpeakeasyBase {
    detectedItems?: DetectedItems[];
    verdict?: RichResultsInspectionResultVerdictEnum;
}
