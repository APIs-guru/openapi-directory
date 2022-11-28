import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseDump } from "./databasedump";


export enum MetadataImportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Updating = "UPDATING",
    Failed = "FAILED"
}


// MetadataImportInput
/** 
 * A metastore resource that imports metadata.
**/
export class MetadataImportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseDump" })
  databaseDump?: DatabaseDump;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// MetadataImport
/** 
 * A metastore resource that imports metadata.
**/
export class MetadataImport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseDump" })
  databaseDump?: DatabaseDump;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MetadataImportStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
