import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
export declare enum GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum {
    OutputSchemaUnspecified = "OUTPUT_SCHEMA_UNSPECIFIED",
    BasicColumns = "BASIC_COLUMNS",
    GcsColumns = "GCS_COLUMNS",
    DatastoreColumns = "DATASTORE_COLUMNS",
    BigQueryColumns = "BIG_QUERY_COLUMNS",
    AllColumns = "ALL_COLUMNS"
}
/**
 * Cloud repository for storing output.
**/
export declare class GooglePrivacyDlpV2OutputStorageConfig extends SpeakeasyBase {
    outputSchema?: GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum;
    table?: GooglePrivacyDlpV2BigQueryTable;
}
