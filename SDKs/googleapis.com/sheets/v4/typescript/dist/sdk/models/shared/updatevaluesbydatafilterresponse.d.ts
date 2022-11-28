import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";
/**
 * The response when updating a range of values by a data filter in a spreadsheet.
**/
export declare class UpdateValuesByDataFilterResponse extends SpeakeasyBase {
    dataFilter?: DataFilter;
    updatedCells?: number;
    updatedColumns?: number;
    updatedData?: ValueRange;
    updatedRange?: string;
    updatedRows?: number;
}
