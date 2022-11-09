import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";

export enum GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum {
    OutputSchemaUnspecified = "OUTPUT_SCHEMA_UNSPECIFIED"
,    BasicColumns = "BASIC_COLUMNS"
,    GcsColumns = "GCS_COLUMNS"
,    DatastoreColumns = "DATASTORE_COLUMNS"
,    BigQueryColumns = "BIG_QUERY_COLUMNS"
,    AllColumns = "ALL_COLUMNS"
}


// GooglePrivacyDlpV2OutputStorageConfig
/** 
 * Cloud repository for storing output.
**/
export class GooglePrivacyDlpV2OutputStorageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputSchema" })
  outputSchema?: GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum;

  @Metadata({ data: "json, name=table" })
  table?: GooglePrivacyDlpV2BigQueryTable;
}
