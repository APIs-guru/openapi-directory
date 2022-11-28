import { SpeakeasyBase } from "../../../internal/utils";
import { ColorStyle } from "./colorstyle";
export declare enum ThemeColorPairColorTypeEnum {
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
 * A pair mapping a spreadsheet theme color type to the concrete color it represents.
**/
export declare class ThemeColorPair extends SpeakeasyBase {
    color?: ColorStyle;
    colorType?: ThemeColorPairColorTypeEnum;
}
