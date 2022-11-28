import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineConnection } from "./lineconnection";
import { LineFill } from "./linefill";
import { Link } from "./link";
import { Dimension } from "./dimension";


export enum LinePropertiesDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH",
    DashDot = "DASH_DOT",
    LongDash = "LONG_DASH",
    LongDashDot = "LONG_DASH_DOT"
}

export enum LinePropertiesEndArrowEnum {
    ArrowStyleUnspecified = "ARROW_STYLE_UNSPECIFIED",
    None = "NONE",
    StealthArrow = "STEALTH_ARROW",
    FillArrow = "FILL_ARROW",
    FillCircle = "FILL_CIRCLE",
    FillSquare = "FILL_SQUARE",
    FillDiamond = "FILL_DIAMOND",
    OpenArrow = "OPEN_ARROW",
    OpenCircle = "OPEN_CIRCLE",
    OpenSquare = "OPEN_SQUARE",
    OpenDiamond = "OPEN_DIAMOND"
}

export enum LinePropertiesStartArrowEnum {
    ArrowStyleUnspecified = "ARROW_STYLE_UNSPECIFIED",
    None = "NONE",
    StealthArrow = "STEALTH_ARROW",
    FillArrow = "FILL_ARROW",
    FillCircle = "FILL_CIRCLE",
    FillSquare = "FILL_SQUARE",
    FillDiamond = "FILL_DIAMOND",
    OpenArrow = "OPEN_ARROW",
    OpenCircle = "OPEN_CIRCLE",
    OpenSquare = "OPEN_SQUARE",
    OpenDiamond = "OPEN_DIAMOND"
}


// LineProperties
/** 
 * The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.
**/
export class LineProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashStyle" })
  dashStyle?: LinePropertiesDashStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=endArrow" })
  endArrow?: LinePropertiesEndArrowEnum;

  @SpeakeasyMetadata({ data: "json, name=endConnection" })
  endConnection?: LineConnection;

  @SpeakeasyMetadata({ data: "json, name=lineFill" })
  lineFill?: LineFill;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=startArrow" })
  startArrow?: LinePropertiesStartArrowEnum;

  @SpeakeasyMetadata({ data: "json, name=startConnection" })
  startConnection?: LineConnection;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: Dimension;
}
