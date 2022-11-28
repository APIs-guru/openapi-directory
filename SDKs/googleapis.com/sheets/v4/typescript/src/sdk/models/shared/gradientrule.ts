import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterpolationPoint } from "./interpolationpoint";



// GradientRule
/** 
 * A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
**/
export class GradientRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxpoint" })
  maxpoint?: InterpolationPoint;

  @SpeakeasyMetadata({ data: "json, name=midpoint" })
  midpoint?: InterpolationPoint;

  @SpeakeasyMetadata({ data: "json, name=minpoint" })
  minpoint?: InterpolationPoint;
}
