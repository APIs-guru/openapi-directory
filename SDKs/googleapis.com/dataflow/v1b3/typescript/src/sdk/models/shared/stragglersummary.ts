import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StragglerSummary
/** 
 * Summarized straggler identification details.
**/
export class StragglerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stragglerCauseCount" })
  stragglerCauseCount?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=totalStragglerCount" })
  totalStragglerCount?: string;
}
