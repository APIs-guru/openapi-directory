import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";


// UpdateDataSourceRequest
/** 
 * Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.
**/
export class UpdateDataSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;

  @Metadata({ data: "json, name=fields" })
  fields?: string;
}
