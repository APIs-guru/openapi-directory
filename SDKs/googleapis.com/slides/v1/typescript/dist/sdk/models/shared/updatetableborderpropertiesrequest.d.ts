import { SpeakeasyBase } from "../../../internal/utils";
import { TableBorderProperties } from "./tableborderproperties";
import { TableRange } from "./tablerange";
export declare enum UpdateTableBorderPropertiesRequestBorderPositionEnum {
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
/**
 * Updates the properties of the table borders in a Table.
**/
export declare class UpdateTableBorderPropertiesRequest extends SpeakeasyBase {
    borderPosition?: UpdateTableBorderPropertiesRequestBorderPositionEnum;
    fields?: string;
    objectId?: string;
    tableBorderProperties?: TableBorderProperties;
    tableRange?: TableRange;
}
