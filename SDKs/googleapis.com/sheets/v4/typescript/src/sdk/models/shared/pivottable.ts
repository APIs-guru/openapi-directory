import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PivotGroup } from "./pivotgroup";
import { PivotFilterCriteria } from "./pivotfiltercriteria";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { PivotFilterSpec } from "./pivotfilterspec";
import { GridRange } from "./gridrange";
import { PivotValue } from "./pivotvalue";


export enum PivotTableValueLayoutEnum {
    Horizontal = "HORIZONTAL",
    Vertical = "VERTICAL"
}


// PivotTable
/** 
 * A pivot table.
**/
export class PivotTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: PivotGroup })
  columns?: PivotGroup[];

  @SpeakeasyMetadata({ data: "json, name=criteria", elemType: PivotFilterCriteria })
  criteria?: Map<string, PivotFilterCriteria>;

  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=filterSpecs", elemType: PivotFilterSpec })
  filterSpecs?: PivotFilterSpec[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: PivotGroup })
  rows?: PivotGroup[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=valueLayout" })
  valueLayout?: PivotTableValueLayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: PivotValue })
  values?: PivotValue[];
}
