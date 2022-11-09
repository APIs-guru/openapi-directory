import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LineConnection } from "./lineconnection";
import { LineFill } from "./linefill";
import { Link } from "./link";
import { LineConnection } from "./lineconnection";
import { Dimension } from "./dimension";

export enum LinePropertiesDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED"
,    Solid = "SOLID"
,    Dot = "DOT"
,    Dash = "DASH"
,    DashDot = "DASH_DOT"
,    LongDash = "LONG_DASH"
,    LongDashDot = "LONG_DASH_DOT"
}

export enum LinePropertiesEndArrowEnum {
    ArrowStyleUnspecified = "ARROW_STYLE_UNSPECIFIED"
,    None = "NONE"
,    StealthArrow = "STEALTH_ARROW"
,    FillArrow = "FILL_ARROW"
,    FillCircle = "FILL_CIRCLE"
,    FillSquare = "FILL_SQUARE"
,    FillDiamond = "FILL_DIAMOND"
,    OpenArrow = "OPEN_ARROW"
,    OpenCircle = "OPEN_CIRCLE"
,    OpenSquare = "OPEN_SQUARE"
,    OpenDiamond = "OPEN_DIAMOND"
}

export enum LinePropertiesStartArrowEnum {
    ArrowStyleUnspecified = "ARROW_STYLE_UNSPECIFIED"
,    None = "NONE"
,    StealthArrow = "STEALTH_ARROW"
,    FillArrow = "FILL_ARROW"
,    FillCircle = "FILL_CIRCLE"
,    FillSquare = "FILL_SQUARE"
,    FillDiamond = "FILL_DIAMOND"
,    OpenArrow = "OPEN_ARROW"
,    OpenCircle = "OPEN_CIRCLE"
,    OpenSquare = "OPEN_SQUARE"
,    OpenDiamond = "OPEN_DIAMOND"
}


// LineProperties
/** 
 * The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.
**/
export class LineProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dashStyle" })
  dashStyle?: LinePropertiesDashStyleEnum;

  @Metadata({ data: "json, name=endArrow" })
  endArrow?: LinePropertiesEndArrowEnum;

  @Metadata({ data: "json, name=endConnection" })
  endConnection?: LineConnection;

  @Metadata({ data: "json, name=lineFill" })
  lineFill?: LineFill;

  @Metadata({ data: "json, name=link" })
  link?: Link;

  @Metadata({ data: "json, name=startArrow" })
  startArrow?: LinePropertiesStartArrowEnum;

  @Metadata({ data: "json, name=startConnection" })
  startConnection?: LineConnection;

  @Metadata({ data: "json, name=weight" })
  weight?: Dimension;
}
