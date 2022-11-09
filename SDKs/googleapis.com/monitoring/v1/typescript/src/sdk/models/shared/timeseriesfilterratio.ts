import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RatioPart } from "./ratiopart";
import { RatioPart } from "./ratiopart";
import { PickTimeSeriesFilter } from "./picktimeseriesfilter";
import { Aggregation } from "./aggregation";
import { StatisticalTimeSeriesFilter } from "./statisticaltimeseriesfilter";


// TimeSeriesFilterRatio
/** 
 * A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
**/
export class TimeSeriesFilterRatio extends SpeakeasyBase {
  @Metadata({ data: "json, name=denominator" })
  denominator?: RatioPart;

  @Metadata({ data: "json, name=numerator" })
  numerator?: RatioPart;

  @Metadata({ data: "json, name=pickTimeSeriesFilter" })
  pickTimeSeriesFilter?: PickTimeSeriesFilter;

  @Metadata({ data: "json, name=secondaryAggregation" })
  secondaryAggregation?: Aggregation;

  @Metadata({ data: "json, name=statisticalTimeSeriesFilter" })
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
