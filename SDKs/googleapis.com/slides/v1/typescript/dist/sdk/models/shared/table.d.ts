import { SpeakeasyBase } from "../../../internal/utils";
import { TableBorderRow } from "./tableborderrow";
import { TableColumnProperties } from "./tablecolumnproperties";
import { TableRow } from "./tablerow";
/**
 * A PageElement kind representing a table.
**/
export declare class Table extends SpeakeasyBase {
    columns?: number;
    horizontalBorderRows?: TableBorderRow[];
    rows?: number;
    tableColumns?: TableColumnProperties[];
    tableRows?: TableRow[];
    verticalBorderRows?: TableBorderRow[];
}
