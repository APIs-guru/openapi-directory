import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PointStyleShapeEnum {
    PointShapeUnspecified = "POINT_SHAPE_UNSPECIFIED"
,    Circle = "CIRCLE"
,    Diamond = "DIAMOND"
,    Hexagon = "HEXAGON"
,    Pentagon = "PENTAGON"
,    Square = "SQUARE"
,    Star = "STAR"
,    Triangle = "TRIANGLE"
,    XMark = "X_MARK"
}


// PointStyle
/** 
 * The style of a point on the chart.
**/
export class PointStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=shape" })
  shape?: PointStyleShapeEnum;

  @Metadata({ data: "json, name=size" })
  size?: number;
}
