import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StragglerSummary
/** 
 * Summarized straggler identification details.
**/
export class StragglerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=stragglerCauseCount" })
  stragglerCauseCount?: Map<string, string>;

  @Metadata({ data: "json, name=totalStragglerCount" })
  totalStragglerCount?: string;
}
