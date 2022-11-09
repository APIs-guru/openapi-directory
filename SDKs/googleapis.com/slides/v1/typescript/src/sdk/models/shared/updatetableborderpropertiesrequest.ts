import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableBorderProperties } from "./tableborderproperties";
import { TableRange } from "./tablerange";

export enum UpdateTableBorderPropertiesRequestBorderPositionEnum {
    All = "ALL"
,    Bottom = "BOTTOM"
,    Inner = "INNER"
,    InnerHorizontal = "INNER_HORIZONTAL"
,    InnerVertical = "INNER_VERTICAL"
,    Left = "LEFT"
,    Outer = "OUTER"
,    Right = "RIGHT"
,    Top = "TOP"
}


// UpdateTableBorderPropertiesRequest
/** 
 * Updates the properties of the table borders in a Table.
**/
export class UpdateTableBorderPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=borderPosition" })
  borderPosition?: UpdateTableBorderPropertiesRequestBorderPositionEnum;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=tableBorderProperties" })
  tableBorderProperties?: TableBorderProperties;

  @Metadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
