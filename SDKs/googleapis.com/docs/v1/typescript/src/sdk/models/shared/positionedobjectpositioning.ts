import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";

export enum PositionedObjectPositioningLayoutEnum {
    PositionedObjectLayoutUnspecified = "POSITIONED_OBJECT_LAYOUT_UNSPECIFIED"
,    WrapText = "WRAP_TEXT"
,    BreakLeft = "BREAK_LEFT"
,    BreakRight = "BREAK_RIGHT"
,    BreakLeftRight = "BREAK_LEFT_RIGHT"
,    InFrontOfText = "IN_FRONT_OF_TEXT"
,    BehindText = "BEHIND_TEXT"
}


// PositionedObjectPositioning
/** 
 * The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it's tethered to.
**/
export class PositionedObjectPositioning extends SpeakeasyBase {
  @Metadata({ data: "json, name=layout" })
  layout?: PositionedObjectPositioningLayoutEnum;

  @Metadata({ data: "json, name=leftOffset" })
  leftOffset?: Dimension;

  @Metadata({ data: "json, name=topOffset" })
  topOffset?: Dimension;
}
