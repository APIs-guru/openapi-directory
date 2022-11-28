import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
export declare enum PositionedObjectPositioningLayoutEnum {
    PositionedObjectLayoutUnspecified = "POSITIONED_OBJECT_LAYOUT_UNSPECIFIED",
    WrapText = "WRAP_TEXT",
    BreakLeft = "BREAK_LEFT",
    BreakRight = "BREAK_RIGHT",
    BreakLeftRight = "BREAK_LEFT_RIGHT",
    InFrontOfText = "IN_FRONT_OF_TEXT",
    BehindText = "BEHIND_TEXT"
}
/**
 * The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it's tethered to.
**/
export declare class PositionedObjectPositioning extends SpeakeasyBase {
    layout?: PositionedObjectPositioningLayoutEnum;
    leftOffset?: Dimension;
    topOffset?: Dimension;
}
