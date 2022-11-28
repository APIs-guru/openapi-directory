import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChartOptionsModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Color = "COLOR",
    XRay = "X_RAY",
    Stats = "STATS"
}
/**
 * Options to control visual rendering of a chart.
**/
export declare class ChartOptions extends SpeakeasyBase {
    mode?: ChartOptionsModeEnum;
}
