import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * The request for clearing more than one range selected by a DataFilter in a spreadsheet.
**/
export declare class BatchClearValuesByDataFilterRequest extends SpeakeasyBase {
    dataFilters?: DataFilter[];
}
