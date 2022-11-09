import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval
/** 
 * A single interval in a time series.
**/
export class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationCount" })
  conversationCount?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
