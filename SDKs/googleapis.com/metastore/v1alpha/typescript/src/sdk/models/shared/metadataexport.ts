import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetadataExportDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Mysql = "MYSQL"
,    Avro = "AVRO"
}

export enum MetadataExportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
}


// MetadataExport
/** 
 * The details of a metadata export operation.
**/
export class MetadataExport extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseDumpType" })
  databaseDumpType?: MetadataExportDatabaseDumpTypeEnum;

  @Metadata({ data: "json, name=destinationGcsUri" })
  destinationGcsUri?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: MetadataExportStateEnum;
}
