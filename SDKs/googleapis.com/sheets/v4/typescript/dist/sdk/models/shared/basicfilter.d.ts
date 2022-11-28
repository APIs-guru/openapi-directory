import { SpeakeasyBase } from "../../../internal/utils";
import { FilterCriteria } from "./filtercriteria";
import { FilterSpec } from "./filterspec";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";
/**
 * The default filter associated with a sheet.
**/
export declare class BasicFilter extends SpeakeasyBase {
    criteria?: Map<string, FilterCriteria>;
    filterSpecs?: FilterSpec[];
    range?: GridRange;
    sortSpecs?: SortSpec[];
}
