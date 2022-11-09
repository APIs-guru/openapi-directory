import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileUsabilityIssue } from "./mobileusabilityissue";

export enum MobileUsabilityInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED"
,    Pass = "PASS"
,    Partial = "PARTIAL"
,    Fail = "FAIL"
,    Neutral = "NEUTRAL"
}


// MobileUsabilityInspectionResult
/** 
 * Mobile-usability inspection results.
**/
export class MobileUsabilityInspectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=issues", elemType: shared.MobileUsabilityIssue })
  issues?: MobileUsabilityIssue[];

  @Metadata({ data: "json, name=verdict" })
  verdict?: MobileUsabilityInspectionResultVerdictEnum;
}
