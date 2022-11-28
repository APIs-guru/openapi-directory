import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RatioPart } from "./ratiopart";
import { PickTimeSeriesFilter } from "./picktimeseriesfilter";
import { Aggregation } from "./aggregation";
import { StatisticalTimeSeriesFilter } from "./statisticaltimeseriesfilter";



// TimeSeriesFilterRatio
/** 
 * A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
**/
export class TimeSeriesFilterRatio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=denominator" })
  denominator?: RatioPart;

  @SpeakeasyMetadata({ data: "json, name=numerator" })
  numerator?: RatioPart;

  @SpeakeasyMetadata({ data: "json, name=pickTimeSeriesFilter" })
  pickTimeSeriesFilter?: PickTimeSeriesFilter;

  @SpeakeasyMetadata({ data: "json, name=secondaryAggregation" })
  secondaryAggregation?: Aggregation;

  @SpeakeasyMetadata({ data: "json, name=statisticalTimeSeriesFilter" })
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
