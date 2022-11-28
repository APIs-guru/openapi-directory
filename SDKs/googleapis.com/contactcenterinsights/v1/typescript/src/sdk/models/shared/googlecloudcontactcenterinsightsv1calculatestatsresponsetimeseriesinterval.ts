import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval
/** 
 * A single interval in a time series.
**/
export class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationCount" })
  conversationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
