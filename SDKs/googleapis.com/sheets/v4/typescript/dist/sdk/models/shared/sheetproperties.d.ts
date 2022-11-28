import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSheetProperties } from "./datasourcesheetproperties";
import { GridProperties } from "./gridproperties";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
export declare enum SheetPropertiesSheetTypeEnum {
    SheetTypeUnspecified = "SHEET_TYPE_UNSPECIFIED",
    Grid = "GRID",
    Object = "OBJECT",
    DataSource = "DATA_SOURCE"
}
/**
 * Properties of a sheet.
**/
export declare class SheetProperties extends SpeakeasyBase {
    dataSourceSheetProperties?: DataSourceSheetProperties;
    gridProperties?: GridProperties;
    hidden?: boolean;
    index?: number;
    rightToLeft?: boolean;
    sheetId?: number;
    sheetType?: SheetPropertiesSheetTypeEnum;
    tabColor?: Color;
    tabColorStyle?: ColorStyle;
    title?: string;
}
