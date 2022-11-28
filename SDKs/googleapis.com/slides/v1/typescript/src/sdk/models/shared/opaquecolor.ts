import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RgbColor } from "./rgbcolor";


export enum OpaqueColorThemeColorEnum {
    ThemeColorTypeUnspecified = "THEME_COLOR_TYPE_UNSPECIFIED",
    Dark1 = "DARK1",
    Light1 = "LIGHT1",
    Dark2 = "DARK2",
    Light2 = "LIGHT2",
    Accent1 = "ACCENT1",
    Accent2 = "ACCENT2",
    Accent3 = "ACCENT3",
    Accent4 = "ACCENT4",
    Accent5 = "ACCENT5",
    Accent6 = "ACCENT6",
    Hyperlink = "HYPERLINK",
    FollowedHyperlink = "FOLLOWED_HYPERLINK",
    Text1 = "TEXT1",
    Background1 = "BACKGROUND1",
    Text2 = "TEXT2",
    Background2 = "BACKGROUND2"
}


// OpaqueColor
/** 
 * A themeable solid color value.
**/
export class OpaqueColor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rgbColor" })
  rgbColor?: RgbColor;

  @SpeakeasyMetadata({ data: "json, name=themeColor" })
  themeColor?: OpaqueColorThemeColorEnum;
}
