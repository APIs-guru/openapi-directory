import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumn } from "./datasourcecolumn";
import { DataSourceSpec } from "./datasourcespec";



// DataSource
/** 
 * Information about an external data source in the spreadsheet.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calculatedColumns", elemType: DataSourceColumn })
  calculatedColumns?: DataSourceColumn[];

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: DataSourceSpec;
}
