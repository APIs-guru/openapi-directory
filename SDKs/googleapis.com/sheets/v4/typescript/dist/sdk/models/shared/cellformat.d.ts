import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Borders } from "./borders";
import { NumberFormat } from "./numberformat";
import { Padding } from "./padding";
import { TextFormat } from "./textformat";
import { TextRotation } from "./textrotation";
export declare enum CellFormatHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED",
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}
export declare enum CellFormatHyperlinkDisplayTypeEnum {
    HyperlinkDisplayTypeUnspecified = "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
    Linked = "LINKED",
    PlainText = "PLAIN_TEXT"
}
export declare enum CellFormatTextDirectionEnum {
    TextDirectionUnspecified = "TEXT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}
export declare enum CellFormatVerticalAlignmentEnum {
    VerticalAlignUnspecified = "VERTICAL_ALIGN_UNSPECIFIED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}
export declare enum CellFormatWrapStrategyEnum {
    WrapStrategyUnspecified = "WRAP_STRATEGY_UNSPECIFIED",
    OverflowCell = "OVERFLOW_CELL",
    LegacyWrap = "LEGACY_WRAP",
    Clip = "CLIP",
    Wrap = "WRAP"
}
/**
 * The format of a cell.
**/
export declare class CellFormat extends SpeakeasyBase {
    backgroundColor?: Color;
    backgroundColorStyle?: ColorStyle;
    borders?: Borders;
    horizontalAlignment?: CellFormatHorizontalAlignmentEnum;
    hyperlinkDisplayType?: CellFormatHyperlinkDisplayTypeEnum;
    numberFormat?: NumberFormat;
    padding?: Padding;
    textDirection?: CellFormatTextDirectionEnum;
    textFormat?: TextFormat;
    textRotation?: TextRotation;
    verticalAlignment?: CellFormatVerticalAlignmentEnum;
    wrapStrategy?: CellFormatWrapStrategyEnum;
}
