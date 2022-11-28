import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartDateTimeRule } from "./chartdatetimerule";
import { ChartHistogramRule } from "./charthistogramrule";



// ChartGroupRule
/** 
 * An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.
**/
export class ChartGroupRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTimeRule" })
  dateTimeRule?: ChartDateTimeRule;

  @SpeakeasyMetadata({ data: "json, name=histogramRule" })
  histogramRule?: ChartHistogramRule;
}
