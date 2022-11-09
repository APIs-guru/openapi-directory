import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstats";


// GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse
/** 
 * Response of querying an issue model's statistics.
**/
export class GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentStats" })
  currentStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
}
