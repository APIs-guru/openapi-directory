import { SpeakeasyBase } from "../../../internal/utils";
import { TableColumnProperties } from "./tablecolumnproperties";
import { Location } from "./location";
/**
 * Updates the TableColumnProperties of columns in a table.
**/
export declare class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
    columnIndices?: number[];
    fields?: string;
    tableColumnProperties?: TableColumnProperties;
    tableStartLocation?: Location;
}
