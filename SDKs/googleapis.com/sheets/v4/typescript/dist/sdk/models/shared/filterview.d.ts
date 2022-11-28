import { SpeakeasyBase } from "../../../internal/utils";
import { FilterCriteria } from "./filtercriteria";
import { FilterSpec } from "./filterspec";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";
/**
 * A filter view.
**/
export declare class FilterView extends SpeakeasyBase {
    criteria?: Map<string, FilterCriteria>;
    filterSpecs?: FilterSpec[];
    filterViewId?: number;
    namedRangeId?: string;
    range?: GridRange;
    sortSpecs?: SortSpec[];
    title?: string;
}
