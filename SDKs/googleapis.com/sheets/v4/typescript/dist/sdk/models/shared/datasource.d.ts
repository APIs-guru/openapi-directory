import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumn } from "./datasourcecolumn";
import { DataSourceSpec } from "./datasourcespec";
/**
 * Information about an external data source in the spreadsheet.
**/
export declare class DataSource extends SpeakeasyBase {
    calculatedColumns?: DataSourceColumn[];
    dataSourceId?: string;
    sheetId?: number;
    spec?: DataSourceSpec;
}
