import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AxisScaleEnum {
    ScaleUnspecified = "SCALE_UNSPECIFIED",
    Linear = "LINEAR",
    Log10 = "LOG10"
}
/**
 * A chart axis.
**/
export declare class Axis extends SpeakeasyBase {
    label?: string;
    scale?: AxisScaleEnum;
}
