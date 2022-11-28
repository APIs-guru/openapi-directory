import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSheetProperties } from "./datasourcesheetproperties";
import { GridProperties } from "./gridproperties";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";


export enum SheetPropertiesSheetTypeEnum {
    SheetTypeUnspecified = "SHEET_TYPE_UNSPECIFIED",
    Grid = "GRID",
    Object = "OBJECT",
    DataSource = "DATA_SOURCE"
}


// SheetProperties
/** 
 * Properties of a sheet.
**/
export class SheetProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceSheetProperties" })
  dataSourceSheetProperties?: DataSourceSheetProperties;

  @SpeakeasyMetadata({ data: "json, name=gridProperties" })
  gridProperties?: GridProperties;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=rightToLeft" })
  rightToLeft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @SpeakeasyMetadata({ data: "json, name=sheetType" })
  sheetType?: SheetPropertiesSheetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tabColor" })
  tabColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=tabColorStyle" })
  tabColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
