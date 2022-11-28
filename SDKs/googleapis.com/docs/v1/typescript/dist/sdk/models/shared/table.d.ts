import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
import { TableStyle } from "./tablestyle";
/**
 * A StructuralElement representing a table.
**/
export declare class Table extends SpeakeasyBase {
    columns?: number;
    rows?: number;
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    tableRows?: TableRow[];
    tableStyle?: TableStyle;
}
