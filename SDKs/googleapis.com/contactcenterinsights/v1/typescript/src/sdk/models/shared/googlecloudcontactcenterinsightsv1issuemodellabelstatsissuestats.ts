import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats
/** 
 * Aggregated statistics about an issue.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: string;

  @SpeakeasyMetadata({ data: "json, name=labeledConversationsCount" })
  labeledConversationsCount?: string;
}
