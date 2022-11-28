import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TableCellProperties } from "./tablecellproperties";
import { TextContent } from "./textcontent";
/**
 * Properties and contents of each table cell.
**/
export declare class TableCell extends SpeakeasyBase {
    columnSpan?: number;
    location?: TableCellLocation;
    rowSpan?: number;
    tableCellProperties?: TableCellProperties;
    text?: TextContent;
}
