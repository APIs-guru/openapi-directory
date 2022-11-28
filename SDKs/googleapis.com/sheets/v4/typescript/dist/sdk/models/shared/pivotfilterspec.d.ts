import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotFilterCriteria } from "./pivotfiltercriteria";
/**
 * The pivot table filter criteria associated with a specific source column offset.
**/
export declare class PivotFilterSpec extends SpeakeasyBase {
    columnOffsetIndex?: number;
    dataSourceColumnReference?: DataSourceColumnReference;
    filterCriteria?: PivotFilterCriteria;
}
