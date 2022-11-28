import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ThresholdColorEnum {
    ColorUnspecified = "COLOR_UNSPECIFIED",
    Yellow = "YELLOW",
    Red = "RED"
}
export declare enum ThresholdDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Above = "ABOVE",
    Below = "BELOW"
}
export declare enum ThresholdTargetAxisEnum {
    TargetAxisUnspecified = "TARGET_AXIS_UNSPECIFIED",
    Y1 = "Y1",
    Y2 = "Y2"
}
/**
 * Defines a threshold for categorizing time series values.
**/
export declare class Threshold extends SpeakeasyBase {
    color?: ThresholdColorEnum;
    direction?: ThresholdDirectionEnum;
    label?: string;
    targetAxis?: ThresholdTargetAxisEnum;
    value?: number;
}
