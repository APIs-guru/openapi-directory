import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellProperties } from "./tablecellproperties";
import { TableRange } from "./tablerange";
/**
 * Update the properties of a TableCell.
**/
export declare class UpdateTableCellPropertiesRequest extends SpeakeasyBase {
    fields?: string;
    objectId?: string;
    tableCellProperties?: TableCellProperties;
    tableRange?: TableRange;
}
