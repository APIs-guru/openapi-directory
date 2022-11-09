import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeSeriesFilter } from "./timeseriesfilter";
import { TimeSeriesFilterRatio } from "./timeseriesfilterratio";


// TimeSeriesQuery
/** 
 * TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
**/
export class TimeSeriesQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=prometheusQuery" })
  prometheusQuery?: string;

  @Metadata({ data: "json, name=timeSeriesFilter" })
  timeSeriesFilter?: TimeSeriesFilter;

  @Metadata({ data: "json, name=timeSeriesFilterRatio" })
  timeSeriesFilterRatio?: TimeSeriesFilterRatio;

  @Metadata({ data: "json, name=timeSeriesQueryLanguage" })
  timeSeriesQueryLanguage?: string;

  @Metadata({ data: "json, name=unitOverride" })
  unitOverride?: string;
}
