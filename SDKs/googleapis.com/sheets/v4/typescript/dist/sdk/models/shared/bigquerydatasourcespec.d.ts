import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryQuerySpec } from "./bigqueryqueryspec";
import { BigQueryTableSpec } from "./bigquerytablespec";
/**
 * The specification of a BigQuery data source that's connected to a sheet.
**/
export declare class BigQueryDataSourceSpec extends SpeakeasyBase {
    projectId?: string;
    querySpec?: BigQueryQuerySpec;
    tableSpec?: BigQueryTableSpec;
}
