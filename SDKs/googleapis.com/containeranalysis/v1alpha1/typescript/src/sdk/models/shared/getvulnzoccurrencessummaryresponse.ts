import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SeverityCount } from "./severitycount";


// GetVulnzOccurrencesSummaryResponse
/** 
 * A summary of how many vulnz occurrences there are per severity type. counts by groups, or if we should have different summary messages like this.
**/
export class GetVulnzOccurrencesSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=counts", elemType: shared.SeverityCount })
  counts?: SeverityCount[];
}
