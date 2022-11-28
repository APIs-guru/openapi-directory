import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";



// DataSourceObjectReference
/** 
 * Reference to a data source object.
**/
export class DataSourceObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartId" })
  chartId?: number;

  @SpeakeasyMetadata({ data: "json, name=dataSourceFormulaCell" })
  dataSourceFormulaCell?: GridCoordinate;

  @SpeakeasyMetadata({ data: "json, name=dataSourcePivotTableAnchorCell" })
  dataSourcePivotTableAnchorCell?: GridCoordinate;

  @SpeakeasyMetadata({ data: "json, name=dataSourceTableAnchorCell" })
  dataSourceTableAnchorCell?: GridCoordinate;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: string;
}
