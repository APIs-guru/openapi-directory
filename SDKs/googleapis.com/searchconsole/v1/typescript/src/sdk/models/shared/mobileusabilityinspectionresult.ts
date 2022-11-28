import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileUsabilityIssue } from "./mobileusabilityissue";


export enum MobileUsabilityInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}


// MobileUsabilityInspectionResult
/** 
 * Mobile-usability inspection results.
**/
export class MobileUsabilityInspectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issues", elemType: MobileUsabilityIssue })
  issues?: MobileUsabilityIssue[];

  @SpeakeasyMetadata({ data: "json, name=verdict" })
  verdict?: MobileUsabilityInspectionResultVerdictEnum;
}
