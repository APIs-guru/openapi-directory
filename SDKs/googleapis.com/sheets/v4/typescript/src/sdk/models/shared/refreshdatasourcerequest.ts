import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceObjectReferences } from "./datasourceobjectreferences";


// RefreshDataSourceRequest
/** 
 * Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
**/
export class RefreshDataSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=isAll" })
  isAll?: boolean;

  @Metadata({ data: "json, name=references" })
  references?: DataSourceObjectReferences;
}
