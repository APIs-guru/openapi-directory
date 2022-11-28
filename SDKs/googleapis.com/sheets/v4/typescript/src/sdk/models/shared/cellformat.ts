import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Borders } from "./borders";
import { NumberFormat } from "./numberformat";
import { Padding } from "./padding";
import { TextFormat } from "./textformat";
import { TextRotation } from "./textrotation";


export enum CellFormatHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED",
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}

export enum CellFormatHyperlinkDisplayTypeEnum {
    HyperlinkDisplayTypeUnspecified = "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
    Linked = "LINKED",
    PlainText = "PLAIN_TEXT"
}

export enum CellFormatTextDirectionEnum {
    TextDirectionUnspecified = "TEXT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}

export enum CellFormatVerticalAlignmentEnum {
    VerticalAlignUnspecified = "VERTICAL_ALIGN_UNSPECIFIED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}

export enum CellFormatWrapStrategyEnum {
    WrapStrategyUnspecified = "WRAP_STRATEGY_UNSPECIFIED",
    OverflowCell = "OVERFLOW_CELL",
    LegacyWrap = "LEGACY_WRAP",
    Clip = "CLIP",
    Wrap = "WRAP"
}


// CellFormat
/** 
 * The format of a cell.
**/
export class CellFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=borders" })
  borders?: Borders;

  @SpeakeasyMetadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: CellFormatHorizontalAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=hyperlinkDisplayType" })
  hyperlinkDisplayType?: CellFormatHyperlinkDisplayTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=numberFormat" })
  numberFormat?: NumberFormat;

  @SpeakeasyMetadata({ data: "json, name=padding" })
  padding?: Padding;

  @SpeakeasyMetadata({ data: "json, name=textDirection" })
  textDirection?: CellFormatTextDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;

  @SpeakeasyMetadata({ data: "json, name=textRotation" })
  textRotation?: TextRotation;

  @SpeakeasyMetadata({ data: "json, name=verticalAlignment" })
  verticalAlignment?: CellFormatVerticalAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=wrapStrategy" })
  wrapStrategy?: CellFormatWrapStrategyEnum;
}
