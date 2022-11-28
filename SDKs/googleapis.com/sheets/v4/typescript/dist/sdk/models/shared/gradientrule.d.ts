import { SpeakeasyBase } from "../../../internal/utils";
import { InterpolationPoint } from "./interpolationpoint";
/**
 * A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
**/
export declare class GradientRule extends SpeakeasyBase {
    maxpoint?: InterpolationPoint;
    midpoint?: InterpolationPoint;
    minpoint?: InterpolationPoint;
}
