import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";


export enum TableCellBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}


// TableCellBackgroundFill
/** 
 * The table cell background fill.
**/
export class TableCellBackgroundFill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyState" })
  propertyState?: TableCellBackgroundFillPropertyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
