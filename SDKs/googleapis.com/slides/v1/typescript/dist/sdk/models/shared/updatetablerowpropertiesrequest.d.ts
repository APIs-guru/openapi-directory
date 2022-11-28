import { SpeakeasyBase } from "../../../internal/utils";
import { TableRowProperties } from "./tablerowproperties";
/**
 * Updates the properties of a Table row.
**/
export declare class UpdateTableRowPropertiesRequest extends SpeakeasyBase {
    fields?: string;
    objectId?: string;
    rowIndices?: number[];
    tableRowProperties?: TableRowProperties;
}
