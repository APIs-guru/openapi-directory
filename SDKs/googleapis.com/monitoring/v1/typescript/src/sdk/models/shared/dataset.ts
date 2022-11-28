import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesQuery } from "./timeseriesquery";


export enum DataSetPlotTypeEnum {
    PlotTypeUnspecified = "PLOT_TYPE_UNSPECIFIED",
    Line = "LINE",
    StackedArea = "STACKED_AREA",
    StackedBar = "STACKED_BAR",
    Heatmap = "HEATMAP"
}

export enum DataSetTargetAxisEnum {
    TargetAxisUnspecified = "TARGET_AXIS_UNSPECIFIED",
    Y1 = "Y1",
    Y2 = "Y2"
}


// DataSet
/** 
 * Groups a time series query definition with charting options.
**/
export class DataSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legendTemplate" })
  legendTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=minAlignmentPeriod" })
  minAlignmentPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=plotType" })
  plotType?: DataSetPlotTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=targetAxis" })
  targetAxis?: DataSetTargetAxisEnum;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesQuery" })
  timeSeriesQuery?: TimeSeriesQuery;
}
