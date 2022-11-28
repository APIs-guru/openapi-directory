import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigQueryTableSpec
/** 
 * Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
**/
export class BigQueryTableSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableProjectId" })
  tableProjectId?: string;
}
