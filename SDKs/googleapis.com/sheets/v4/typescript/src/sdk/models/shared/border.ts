import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";


export enum BorderStyleEnum {
    StyleUnspecified = "STYLE_UNSPECIFIED",
    Dotted = "DOTTED",
    Dashed = "DASHED",
    Solid = "SOLID",
    SolidMedium = "SOLID_MEDIUM",
    SolidThick = "SOLID_THICK",
    None = "NONE",
    Double = "DOUBLE"
}


// Border
/** 
 * A border along a cell.
**/
export class Border extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: BorderStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
