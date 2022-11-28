import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCount } from "./severitycount";
/**
 * A summary of how many vulnz occurrences there are per severity type. counts by groups, or if we should have different summary messages like this.
**/
export declare class GetVulnzOccurrencesSummaryResponse extends SpeakeasyBase {
    counts?: SeverityCount[];
}
