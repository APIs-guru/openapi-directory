import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceObjectReferences } from "./datasourceobjectreferences";



// RefreshDataSourceRequest
/** 
 * Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
**/
export class RefreshDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isAll" })
  isAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: DataSourceObjectReferences;
}
