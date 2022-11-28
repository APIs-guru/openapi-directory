import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";



// GoogleCloudContactcenterinsightsV1IssueModelLabelStats
/** 
 * Aggregated statistics about an issue model.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelLabelStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzedConversationsCount" })
  analyzedConversationsCount?: string;

  @SpeakeasyMetadata({ data: "json, name=issueStats", elemType: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats })
  issueStats?: Map<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;

  @SpeakeasyMetadata({ data: "json, name=unclassifiedConversationsCount" })
  unclassifiedConversationsCount?: string;
}
