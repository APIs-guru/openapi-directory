import { SpeakeasyBase } from "../../../internal/utils";
import { PivotGroup } from "./pivotgroup";
import { PivotFilterCriteria } from "./pivotfiltercriteria";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { PivotFilterSpec } from "./pivotfilterspec";
import { GridRange } from "./gridrange";
import { PivotValue } from "./pivotvalue";
export declare enum PivotTableValueLayoutEnum {
    Horizontal = "HORIZONTAL",
    Vertical = "VERTICAL"
}
/**
 * A pivot table.
**/
export declare class PivotTable extends SpeakeasyBase {
    columns?: PivotGroup[];
    criteria?: Map<string, PivotFilterCriteria>;
    dataExecutionStatus?: DataExecutionStatus;
    dataSourceId?: string;
    filterSpecs?: PivotFilterSpec[];
    rows?: PivotGroup[];
    source?: GridRange;
    valueLayout?: PivotTableValueLayoutEnum;
    values?: PivotValue[];
}
