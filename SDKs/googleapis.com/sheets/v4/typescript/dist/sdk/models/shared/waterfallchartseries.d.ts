import { SpeakeasyBase } from "../../../internal/utils";
import { WaterfallChartCustomSubtotal } from "./waterfallchartcustomsubtotal";
import { ChartData } from "./chartdata";
import { DataLabel } from "./datalabel";
import { WaterfallChartColumnStyle } from "./waterfallchartcolumnstyle";
/**
 * A single series of data for a waterfall chart.
**/
export declare class WaterfallChartSeries extends SpeakeasyBase {
    customSubtotals?: WaterfallChartCustomSubtotal[];
    data?: ChartData;
    dataLabel?: DataLabel;
    hideTrailingSubtotal?: boolean;
    negativeColumnsStyle?: WaterfallChartColumnStyle;
    positiveColumnsStyle?: WaterfallChartColumnStyle;
    subtotalColumnsStyle?: WaterfallChartColumnStyle;
}
