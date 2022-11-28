import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectedItems } from "./detecteditems";


export enum RichResultsInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}


// RichResultsInspectionResult
/** 
 * Rich-Results inspection result, including any rich results found at this URL.
**/
export class RichResultsInspectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedItems", elemType: DetectedItems })
  detectedItems?: DetectedItems[];

  @SpeakeasyMetadata({ data: "json, name=verdict" })
  verdict?: RichResultsInspectionResultVerdictEnum;
}
