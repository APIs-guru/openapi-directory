import { SpeakeasyBase } from "../../../internal/utils";
import { TableColumnProperties } from "./tablecolumnproperties";
/**
 * Updates the properties of a Table column.
**/
export declare class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
    columnIndices?: number[];
    fields?: string;
    objectId?: string;
    tableColumnProperties?: TableColumnProperties;
}
