import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesQuery } from "./timeseriesquery";
export declare enum DataSetPlotTypeEnum {
    PlotTypeUnspecified = "PLOT_TYPE_UNSPECIFIED",
    Line = "LINE",
    StackedArea = "STACKED_AREA",
    StackedBar = "STACKED_BAR",
    Heatmap = "HEATMAP"
}
export declare enum DataSetTargetAxisEnum {
    TargetAxisUnspecified = "TARGET_AXIS_UNSPECIFIED",
    Y1 = "Y1",
    Y2 = "Y2"
}
/**
 * Groups a time series query definition with charting options.
**/
export declare class DataSet extends SpeakeasyBase {
    legendTemplate?: string;
    minAlignmentPeriod?: string;
    plotType?: DataSetPlotTypeEnum;
    targetAxis?: DataSetTargetAxisEnum;
    timeSeriesQuery?: TimeSeriesQuery;
}
