import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceColumnReference } from "./datasourcecolumnreference";


// DataSourceSheetDimensionRange
/** 
 * A range along a single dimension on a DATA_SOURCE sheet.
**/
export class DataSourceSheetDimensionRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnReferences", elemType: shared.DataSourceColumnReference })
  columnReferences?: DataSourceColumnReference[];

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
