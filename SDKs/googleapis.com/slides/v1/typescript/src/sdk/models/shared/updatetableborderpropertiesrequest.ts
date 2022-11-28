import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableBorderProperties } from "./tableborderproperties";
import { TableRange } from "./tablerange";


export enum UpdateTableBorderPropertiesRequestBorderPositionEnum {
    All = "ALL",
    Bottom = "BOTTOM",
    Inner = "INNER",
    InnerHorizontal = "INNER_HORIZONTAL",
    InnerVertical = "INNER_VERTICAL",
    Left = "LEFT",
    Outer = "OUTER",
    Right = "RIGHT",
    Top = "TOP"
}


// UpdateTableBorderPropertiesRequest
/** 
 * Updates the properties of the table borders in a Table.
**/
export class UpdateTableBorderPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=borderPosition" })
  borderPosition?: UpdateTableBorderPropertiesRequestBorderPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableBorderProperties" })
  tableBorderProperties?: TableBorderProperties;

  @SpeakeasyMetadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
