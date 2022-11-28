import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2BigQueryTable
/** 
 * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
**/
export class GooglePrivacyDlpV2BigQueryTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}
