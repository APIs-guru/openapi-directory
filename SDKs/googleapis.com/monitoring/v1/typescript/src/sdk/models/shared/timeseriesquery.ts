import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesFilter } from "./timeseriesfilter";
import { TimeSeriesFilterRatio } from "./timeseriesfilterratio";



// TimeSeriesQuery
/** 
 * TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
**/
export class TimeSeriesQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prometheusQuery" })
  prometheusQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesFilter" })
  timeSeriesFilter?: TimeSeriesFilter;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesFilterRatio" })
  timeSeriesFilterRatio?: TimeSeriesFilterRatio;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesQueryLanguage" })
  timeSeriesQueryLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=unitOverride" })
  unitOverride?: string;
}
