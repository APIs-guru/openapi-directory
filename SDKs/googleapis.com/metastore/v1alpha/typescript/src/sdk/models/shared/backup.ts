import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Service } from "./service";

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Restoring = "RESTORING"
}


// Backup
/** 
 * The details of a backup resource.
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restoringServices" })
  restoringServices?: string[];

  @Metadata({ data: "json, name=serviceRevision" })
  serviceRevision?: Service;

  @Metadata({ data: "json, name=state" })
  state?: BackupStateEnum;
}
