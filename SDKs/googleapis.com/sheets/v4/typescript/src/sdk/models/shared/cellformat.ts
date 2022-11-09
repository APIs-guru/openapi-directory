import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Borders } from "./borders";
import { NumberFormat } from "./numberformat";
import { Padding } from "./padding";
import { TextFormat } from "./textformat";
import { TextRotation } from "./textrotation";

export enum CellFormatHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED"
,    Left = "LEFT"
,    Center = "CENTER"
,    Right = "RIGHT"
}

export enum CellFormatHyperlinkDisplayTypeEnum {
    HyperlinkDisplayTypeUnspecified = "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED"
,    Linked = "LINKED"
,    PlainText = "PLAIN_TEXT"
}

export enum CellFormatTextDirectionEnum {
    TextDirectionUnspecified = "TEXT_DIRECTION_UNSPECIFIED"
,    LeftToRight = "LEFT_TO_RIGHT"
,    RightToLeft = "RIGHT_TO_LEFT"
}

export enum CellFormatVerticalAlignmentEnum {
    VerticalAlignUnspecified = "VERTICAL_ALIGN_UNSPECIFIED"
,    Top = "TOP"
,    Middle = "MIDDLE"
,    Bottom = "BOTTOM"
}

export enum CellFormatWrapStrategyEnum {
    WrapStrategyUnspecified = "WRAP_STRATEGY_UNSPECIFIED"
,    OverflowCell = "OVERFLOW_CELL"
,    LegacyWrap = "LEGACY_WRAP"
,    Clip = "CLIP"
,    Wrap = "WRAP"
}


// CellFormat
/** 
 * The format of a cell.
**/
export class CellFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @Metadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=borders" })
  borders?: Borders;

  @Metadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: CellFormatHorizontalAlignmentEnum;

  @Metadata({ data: "json, name=hyperlinkDisplayType" })
  hyperlinkDisplayType?: CellFormatHyperlinkDisplayTypeEnum;

  @Metadata({ data: "json, name=numberFormat" })
  numberFormat?: NumberFormat;

  @Metadata({ data: "json, name=padding" })
  padding?: Padding;

  @Metadata({ data: "json, name=textDirection" })
  textDirection?: CellFormatTextDirectionEnum;

  @Metadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;

  @Metadata({ data: "json, name=textRotation" })
  textRotation?: TextRotation;

  @Metadata({ data: "json, name=verticalAlignment" })
  verticalAlignment?: CellFormatVerticalAlignmentEnum;

  @Metadata({ data: "json, name=wrapStrategy" })
  wrapStrategy?: CellFormatWrapStrategyEnum;
}
