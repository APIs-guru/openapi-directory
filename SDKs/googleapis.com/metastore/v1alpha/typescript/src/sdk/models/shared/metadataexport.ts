import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetadataExportDatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}

export enum MetadataExportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}


// MetadataExport
/** 
 * The details of a metadata export operation.
**/
export class MetadataExport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseDumpType" })
  databaseDumpType?: MetadataExportDatabaseDumpTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationGcsUri" })
  destinationGcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MetadataExportStateEnum;
}
