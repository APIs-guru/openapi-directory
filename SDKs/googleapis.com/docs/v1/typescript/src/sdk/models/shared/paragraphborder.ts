import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";

export enum ParagraphBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED"
,    Solid = "SOLID"
,    Dot = "DOT"
,    Dash = "DASH"
}


// ParagraphBorder
/** 
 * A border around a paragraph.
**/
export class ParagraphBorder extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: OptionalColor;

  @Metadata({ data: "json, name=dashStyle" })
  dashStyle?: ParagraphBorderDashStyleEnum;

  @Metadata({ data: "json, name=padding" })
  padding?: Dimension;

  @Metadata({ data: "json, name=width" })
  width?: Dimension;
}
