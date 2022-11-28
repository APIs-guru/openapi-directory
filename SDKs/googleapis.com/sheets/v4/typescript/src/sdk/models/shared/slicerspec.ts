import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { GridRange } from "./gridrange";
import { FilterCriteria } from "./filtercriteria";
import { TextFormat } from "./textformat";


export enum SlicerSpecHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED",
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}


// SlicerSpec
/** 
 * The specifications of a slicer.
**/
export class SlicerSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyToPivotTables" })
  applyToPivotTables?: boolean;

  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=dataRange" })
  dataRange?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: FilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: SlicerSpecHorizontalAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
