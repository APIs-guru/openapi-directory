import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceSheetProperties } from "./datasourcesheetproperties";
import { GridProperties } from "./gridproperties";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";

export enum SheetPropertiesSheetTypeEnum {
    SheetTypeUnspecified = "SHEET_TYPE_UNSPECIFIED"
,    Grid = "GRID"
,    Object = "OBJECT"
,    DataSource = "DATA_SOURCE"
}


// SheetProperties
/** 
 * Properties of a sheet.
**/
export class SheetProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceSheetProperties" })
  dataSourceSheetProperties?: DataSourceSheetProperties;

  @Metadata({ data: "json, name=gridProperties" })
  gridProperties?: GridProperties;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=rightToLeft" })
  rightToLeft?: boolean;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @Metadata({ data: "json, name=sheetType" })
  sheetType?: SheetPropertiesSheetTypeEnum;

  @Metadata({ data: "json, name=tabColor" })
  tabColor?: Color;

  @Metadata({ data: "json, name=tabColorStyle" })
  tabColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
