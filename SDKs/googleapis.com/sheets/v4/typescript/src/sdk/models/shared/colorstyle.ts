import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";


export enum ColorStyleThemeColorEnum {
    ThemeColorTypeUnspecified = "THEME_COLOR_TYPE_UNSPECIFIED",
    Text = "TEXT",
    Background = "BACKGROUND",
    Accent1 = "ACCENT1",
    Accent2 = "ACCENT2",
    Accent3 = "ACCENT3",
    Accent4 = "ACCENT4",
    Accent5 = "ACCENT5",
    Accent6 = "ACCENT6",
    Link = "LINK"
}


// ColorStyle
/** 
 * A color value.
**/
export class ColorStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rgbColor" })
  rgbColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=themeColor" })
  themeColor?: ColorStyleThemeColorEnum;
}
