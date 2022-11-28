import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { BaselineValueFormat } from "./baselinevalueformat";
import { ChartCustomNumberFormatOptions } from "./chartcustomnumberformatoptions";
import { KeyValueFormat } from "./keyvalueformat";


export enum ScorecardChartSpecAggregateTypeEnum {
    ChartAggregateTypeUnspecified = "CHART_AGGREGATE_TYPE_UNSPECIFIED",
    Average = "AVERAGE",
    Count = "COUNT",
    Max = "MAX",
    Median = "MEDIAN",
    Min = "MIN",
    Sum = "SUM"
}

export enum ScorecardChartSpecNumberFormatSourceEnum {
    ChartNumberFormatSourceUndefined = "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED",
    FromData = "FROM_DATA",
    Custom = "CUSTOM"
}


// ScorecardChartSpec
/** 
 * A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
**/
export class ScorecardChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregateType" })
  aggregateType?: ScorecardChartSpecAggregateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=baselineValueData" })
  baselineValueData?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=baselineValueFormat" })
  baselineValueFormat?: BaselineValueFormat;

  @SpeakeasyMetadata({ data: "json, name=customFormatOptions" })
  customFormatOptions?: ChartCustomNumberFormatOptions;

  @SpeakeasyMetadata({ data: "json, name=keyValueData" })
  keyValueData?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=keyValueFormat" })
  keyValueFormat?: KeyValueFormat;

  @SpeakeasyMetadata({ data: "json, name=numberFormatSource" })
  numberFormatSource?: ScorecardChartSpecNumberFormatSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=scaleFactor" })
  scaleFactor?: number;
}
