import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridCoordinate } from "./gridcoordinate";
import { GridCoordinate } from "./gridcoordinate";
import { GridCoordinate } from "./gridcoordinate";


// DataSourceObjectReference
/** 
 * Reference to a data source object.
**/
export class DataSourceObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartId" })
  chartId?: number;

  @Metadata({ data: "json, name=dataSourceFormulaCell" })
  dataSourceFormulaCell?: GridCoordinate;

  @Metadata({ data: "json, name=dataSourcePivotTableAnchorCell" })
  dataSourcePivotTableAnchorCell?: GridCoordinate;

  @Metadata({ data: "json, name=dataSourceTableAnchorCell" })
  dataSourceTableAnchorCell?: GridCoordinate;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: string;
}
