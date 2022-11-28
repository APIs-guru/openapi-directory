import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeverityCount } from "./severitycount";



// GetVulnzOccurrencesSummaryResponse
/** 
 * A summary of how many vulnz occurrences there are per severity type. counts by groups, or if we should have different summary messages like this.
**/
export class GetVulnzOccurrencesSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counts", elemType: SeverityCount })
  counts?: SeverityCount[];
}
