import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { GridRange } from "./gridrange";
import { FilterCriteria } from "./filtercriteria";
import { TextFormat } from "./textformat";
export declare enum SlicerSpecHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED",
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}
/**
 * The specifications of a slicer.
**/
export declare class SlicerSpec extends SpeakeasyBase {
    applyToPivotTables?: boolean;
    backgroundColor?: Color;
    backgroundColorStyle?: ColorStyle;
    columnIndex?: number;
    dataRange?: GridRange;
    filterCriteria?: FilterCriteria;
    horizontalAlignment?: SlicerSpecHorizontalAlignmentEnum;
    textFormat?: TextFormat;
    title?: string;
}
