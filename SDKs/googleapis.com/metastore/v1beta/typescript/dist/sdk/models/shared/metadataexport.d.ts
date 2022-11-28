import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetadataExportDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}
export declare enum MetadataExportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * The details of a metadata export operation.
**/
export declare class MetadataExport extends SpeakeasyBase {
    databaseDumpType?: MetadataExportDatabaseDumpTypeEnum;
    destinationGcsUri?: string;
    endTime?: string;
    startTime?: string;
    state?: MetadataExportStateEnum;
}
