import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PivotGroup } from "./pivotgroup";
import { PivotFilterCriteria } from "./pivotfiltercriteria";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { PivotFilterSpec } from "./pivotfilterspec";
import { PivotGroup } from "./pivotgroup";
import { GridRange } from "./gridrange";
import { PivotValue } from "./pivotvalue";

export enum PivotTableValueLayoutEnum {
    Horizontal = "HORIZONTAL"
,    Vertical = "VERTICAL"
}


// PivotTable
/** 
 * A pivot table.
**/
export class PivotTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.PivotGroup })
  columns?: PivotGroup[];

  @Metadata({ data: "json, name=criteria", elemType: shared.PivotFilterCriteria })
  criteria?: Map<string, PivotFilterCriteria>;

  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=filterSpecs", elemType: shared.PivotFilterSpec })
  filterSpecs?: PivotFilterSpec[];

  @Metadata({ data: "json, name=rows", elemType: shared.PivotGroup })
  rows?: PivotGroup[];

  @Metadata({ data: "json, name=source" })
  source?: GridRange;

  @Metadata({ data: "json, name=valueLayout" })
  valueLayout?: PivotTableValueLayoutEnum;

  @Metadata({ data: "json, name=values", elemType: shared.PivotValue })
  values?: PivotValue[];
}
