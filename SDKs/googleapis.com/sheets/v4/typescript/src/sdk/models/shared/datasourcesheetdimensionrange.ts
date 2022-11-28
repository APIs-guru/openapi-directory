import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";



// DataSourceSheetDimensionRange
/** 
 * A range along a single dimension on a DATA_SOURCE sheet.
**/
export class DataSourceSheetDimensionRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnReferences", elemType: DataSourceColumnReference })
  columnReferences?: DataSourceColumnReference[];

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
