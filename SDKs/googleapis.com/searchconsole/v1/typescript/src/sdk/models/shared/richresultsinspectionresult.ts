import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectedItems } from "./detecteditems";

export enum RichResultsInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED"
,    Pass = "PASS"
,    Partial = "PARTIAL"
,    Fail = "FAIL"
,    Neutral = "NEUTRAL"
}


// RichResultsInspectionResult
/** 
 * Rich-Results inspection result, including any rich results found at this URL.
**/
export class RichResultsInspectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedItems", elemType: shared.DetectedItems })
  detectedItems?: DetectedItems[];

  @Metadata({ data: "json, name=verdict" })
  verdict?: RichResultsInspectionResultVerdictEnum;
}
