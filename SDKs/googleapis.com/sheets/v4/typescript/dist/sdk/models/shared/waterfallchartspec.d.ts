import { SpeakeasyBase } from "../../../internal/utils";
import { LineStyle } from "./linestyle";
import { WaterfallChartDomain } from "./waterfallchartdomain";
import { WaterfallChartSeries } from "./waterfallchartseries";
import { DataLabel } from "./datalabel";
export declare enum WaterfallChartSpecStackedTypeEnum {
    WaterfallStackedTypeUnspecified = "WATERFALL_STACKED_TYPE_UNSPECIFIED",
    Stacked = "STACKED",
    Sequential = "SEQUENTIAL"
}
/**
 * A waterfall chart.
**/
export declare class WaterfallChartSpec extends SpeakeasyBase {
    connectorLineStyle?: LineStyle;
    domain?: WaterfallChartDomain;
    firstValueIsTotal?: boolean;
    hideConnectorLines?: boolean;
    series?: WaterfallChartSeries[];
    stackedType?: WaterfallChartSpecStackedTypeEnum;
    totalDataLabel?: DataLabel;
}
