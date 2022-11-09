import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SnapshotStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
}


// Snapshot
/** 
 * A Filestore snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=filesystemUsedBytes" })
  filesystemUsedBytes?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: SnapshotStateEnum;
}
