import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";


// GoogleCloudContactcenterinsightsV1CalculateStatsResponse
/** 
 * The response for calculating conversation statistics.
**/
export class GoogleCloudContactcenterinsightsV1CalculateStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageDuration" })
  averageDuration?: string;

  @Metadata({ data: "json, name=averageTurnCount" })
  averageTurnCount?: number;

  @Metadata({ data: "json, name=conversationCount" })
  conversationCount?: number;

  @Metadata({ data: "json, name=conversationCountTimeSeries" })
  conversationCountTimeSeries?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries;

  @Metadata({ data: "json, name=customHighlighterMatches" })
  customHighlighterMatches?: Map<string, number>;

  @Metadata({ data: "json, name=issueMatches" })
  issueMatches?: Map<string, number>;

  @Metadata({ data: "json, name=issueMatchesStats", elemType: shared.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats })
  issueMatchesStats?: Map<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;

  @Metadata({ data: "json, name=smartHighlighterMatches" })
  smartHighlighterMatches?: Map<string, number>;
}
