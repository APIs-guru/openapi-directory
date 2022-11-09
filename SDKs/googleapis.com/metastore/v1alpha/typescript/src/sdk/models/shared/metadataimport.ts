import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatabaseDump } from "./databasedump";

export enum MetadataImportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Updating = "UPDATING"
,    Failed = "FAILED"
}


// MetadataImport
/** 
 * A metastore resource that imports metadata.
**/
export class MetadataImport extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=databaseDump" })
  databaseDump?: DatabaseDump;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: MetadataImportStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
