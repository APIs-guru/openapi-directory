import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval";


// GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries
/** 
 * A time series representing conversations over time.
**/
export class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=intervalDuration" })
  intervalDuration?: string;

  @Metadata({ data: "json, name=points", elemType: shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval })
  points?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval[];
}
