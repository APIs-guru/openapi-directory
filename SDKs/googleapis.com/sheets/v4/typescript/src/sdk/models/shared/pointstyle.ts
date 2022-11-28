import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PointStyleShapeEnum {
    PointShapeUnspecified = "POINT_SHAPE_UNSPECIFIED",
    Circle = "CIRCLE",
    Diamond = "DIAMOND",
    Hexagon = "HEXAGON",
    Pentagon = "PENTAGON",
    Square = "SQUARE",
    Star = "STAR",
    Triangle = "TRIANGLE",
    XMark = "X_MARK"
}


// PointStyle
/** 
 * The style of a point on the chart.
**/
export class PointStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shape" })
  shape?: PointStyleShapeEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
