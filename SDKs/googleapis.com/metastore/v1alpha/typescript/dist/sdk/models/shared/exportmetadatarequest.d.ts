import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExportMetadataRequestDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}
/**
 * Request message for DataprocMetastore.ExportMetadata.
**/
export declare class ExportMetadataRequest extends SpeakeasyBase {
    databaseDumpType?: ExportMetadataRequestDatabaseDumpTypeEnum;
    destinationGcsFolder?: string;
    requestId?: string;
}
