import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChartAxisViewWindowOptionsViewWindowModeEnum {
    DefaultViewWindowMode = "DEFAULT_VIEW_WINDOW_MODE",
    ViewWindowModeUnsupported = "VIEW_WINDOW_MODE_UNSUPPORTED",
    Explicit = "EXPLICIT",
    Pretty = "PRETTY"
}
/**
 * The options that define a "view window" for a chart (such as the visible values in an axis).
**/
export declare class ChartAxisViewWindowOptions extends SpeakeasyBase {
    viewWindowMax?: number;
    viewWindowMin?: number;
    viewWindowMode?: ChartAxisViewWindowOptionsViewWindowModeEnum;
}
