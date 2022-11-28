import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval";



// GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries
/** 
 * A time series representing conversations over time.
**/
export class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intervalDuration" })
  intervalDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=points", elemType: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval })
  points?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval[];
}
