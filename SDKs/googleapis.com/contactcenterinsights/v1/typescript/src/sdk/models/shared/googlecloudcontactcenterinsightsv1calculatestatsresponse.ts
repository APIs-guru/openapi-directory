import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";



// GoogleCloudContactcenterinsightsV1CalculateStatsResponse
/** 
 * The response for calculating conversation statistics.
**/
export class GoogleCloudContactcenterinsightsV1CalculateStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageDuration" })
  averageDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=averageTurnCount" })
  averageTurnCount?: number;

  @SpeakeasyMetadata({ data: "json, name=conversationCount" })
  conversationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=conversationCountTimeSeries" })
  conversationCountTimeSeries?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries;

  @SpeakeasyMetadata({ data: "json, name=customHighlighterMatches" })
  customHighlighterMatches?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=issueMatches" })
  issueMatches?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=issueMatchesStats", elemType: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats })
  issueMatchesStats?: Map<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;

  @SpeakeasyMetadata({ data: "json, name=smartHighlighterMatches" })
  smartHighlighterMatches?: Map<string, number>;
}
