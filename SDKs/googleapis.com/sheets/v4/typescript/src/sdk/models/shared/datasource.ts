import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceColumn } from "./datasourcecolumn";
import { DataSourceSpec } from "./datasourcespec";


// DataSource
/** 
 * Information about an external data source in the spreadsheet.
**/
export class DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=calculatedColumns", elemType: shared.DataSourceColumn })
  calculatedColumns?: DataSourceColumn[];

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @Metadata({ data: "json, name=spec" })
  spec?: DataSourceSpec;
}
