import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExportMetadataRequestDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}


// ExportMetadataRequest
/** 
 * Request message for DataprocMetastore.ExportMetadata.
**/
export class ExportMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseDumpType" })
  databaseDumpType?: ExportMetadataRequestDatabaseDumpTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationGcsFolder" })
  destinationGcsFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
