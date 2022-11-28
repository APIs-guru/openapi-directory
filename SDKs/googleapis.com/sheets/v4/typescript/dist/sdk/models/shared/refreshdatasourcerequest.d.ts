import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceObjectReferences } from "./datasourceobjectreferences";
/**
 * Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
**/
export declare class RefreshDataSourceRequest extends SpeakeasyBase {
    dataSourceId?: string;
    force?: boolean;
    isAll?: boolean;
    references?: DataSourceObjectReferences;
}
