import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
export declare enum ColorStyleThemeColorEnum {
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
/**
 * A color value.
**/
export declare class ColorStyle extends SpeakeasyBase {
    rgbColor?: Color;
    themeColor?: ColorStyleThemeColorEnum;
}
