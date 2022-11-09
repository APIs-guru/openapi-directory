import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigQueryTableSpec
/** 
 * Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
**/
export class BigQueryTableSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;

  @Metadata({ data: "json, name=tableProjectId" })
  tableProjectId?: string;
}
