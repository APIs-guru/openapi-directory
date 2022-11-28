import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { FilterCriteria } from "./filtercriteria";
/**
 * The filter criteria associated with a specific column.
**/
export declare class FilterSpec extends SpeakeasyBase {
    columnIndex?: number;
    dataSourceColumnReference?: DataSourceColumnReference;
    filterCriteria?: FilterCriteria;
}
