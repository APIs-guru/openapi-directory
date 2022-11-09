import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolidFill } from "./solidfill";

export enum TableCellBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED"
,    NotRendered = "NOT_RENDERED"
,    Inherit = "INHERIT"
}


// TableCellBackgroundFill
/** 
 * The table cell background fill.
**/
export class TableCellBackgroundFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=propertyState" })
  propertyState?: TableCellBackgroundFillPropertyStateEnum;

  @Metadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
