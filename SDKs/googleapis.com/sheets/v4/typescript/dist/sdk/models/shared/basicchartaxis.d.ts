import { SpeakeasyBase } from "../../../internal/utils";
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
import { ChartAxisViewWindowOptions } from "./chartaxisviewwindowoptions";
export declare enum BasicChartAxisPositionEnum {
    BasicChartAxisPositionUnspecified = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
    BottomAxis = "BOTTOM_AXIS",
    LeftAxis = "LEFT_AXIS",
    RightAxis = "RIGHT_AXIS"
}
/**
 * An axis of the chart. A chart may not have more than one axis per axis position.
**/
export declare class BasicChartAxis extends SpeakeasyBase {
    format?: TextFormat;
    position?: BasicChartAxisPositionEnum;
    title?: string;
    titleTextPosition?: TextPosition;
    viewWindowOptions?: ChartAxisViewWindowOptions;
}
