import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PointStyleShapeEnum {
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
/**
 * The style of a point on the chart.
**/
export declare class PointStyle extends SpeakeasyBase {
    shape?: PointStyleShapeEnum;
    size?: number;
}
