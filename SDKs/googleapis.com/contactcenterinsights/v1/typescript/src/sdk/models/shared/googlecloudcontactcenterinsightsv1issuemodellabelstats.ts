import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";


// GoogleCloudContactcenterinsightsV1IssueModelLabelStats
/** 
 * Aggregated statistics about an issue model.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelLabelStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzedConversationsCount" })
  analyzedConversationsCount?: string;

  @Metadata({ data: "json, name=issueStats", elemType: shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats })
  issueStats?: Map<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;

  @Metadata({ data: "json, name=unclassifiedConversationsCount" })
  unclassifiedConversationsCount?: string;
}
