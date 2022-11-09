import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExportMetadataRequestDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Mysql = "MYSQL"
,    Avro = "AVRO"
}


// ExportMetadataRequest
/** 
 * Request message for DataprocMetastore.ExportMetadata.
**/
export class ExportMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseDumpType" })
  databaseDumpType?: ExportMetadataRequestDatabaseDumpTypeEnum;

  @Metadata({ data: "json, name=destinationGcsFolder" })
  destinationGcsFolder?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
