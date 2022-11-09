import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats
/** 
 * Aggregated statistics about an issue.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=issue" })
  issue?: string;

  @Metadata({ data: "json, name=labeledConversationsCount" })
  labeledConversationsCount?: string;
}
