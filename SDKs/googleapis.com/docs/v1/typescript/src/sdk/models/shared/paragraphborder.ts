import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";


export enum ParagraphBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}


// ParagraphBorder
/** 
 * A border around a paragraph.
**/
export class ParagraphBorder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: OptionalColor;

  @SpeakeasyMetadata({ data: "json, name=dashStyle" })
  dashStyle?: ParagraphBorderDashStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=padding" })
  padding?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: Dimension;
}
