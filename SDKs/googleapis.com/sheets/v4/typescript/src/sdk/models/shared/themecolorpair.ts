import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ColorStyle } from "./colorstyle";

export enum ThemeColorPairColorTypeEnum {
    ThemeColorTypeUnspecified = "THEME_COLOR_TYPE_UNSPECIFIED"
,    Text = "TEXT"
,    Background = "BACKGROUND"
,    Accent1 = "ACCENT1"
,    Accent2 = "ACCENT2"
,    Accent3 = "ACCENT3"
,    Accent4 = "ACCENT4"
,    Accent5 = "ACCENT5"
,    Accent6 = "ACCENT6"
,    Link = "LINK"
}


// ThemeColorPair
/** 
 * A pair mapping a spreadsheet theme color type to the concrete color it represents.
**/
export class ThemeColorPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: ColorStyle;

  @Metadata({ data: "json, name=colorType" })
  colorType?: ThemeColorPairColorTypeEnum;
}
