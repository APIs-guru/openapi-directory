import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { GridRange } from "./gridrange";
import { FilterCriteria } from "./filtercriteria";
import { TextFormat } from "./textformat";

export enum SlicerSpecHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED"
,    Left = "LEFT"
,    Center = "CENTER"
,    Right = "RIGHT"
}


// SlicerSpec
/** 
 * The specifications of a slicer.
**/
export class SlicerSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyToPivotTables" })
  applyToPivotTables?: boolean;

  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @Metadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @Metadata({ data: "json, name=dataRange" })
  dataRange?: GridRange;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: FilterCriteria;

  @Metadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: SlicerSpecHorizontalAlignmentEnum;

  @Metadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
