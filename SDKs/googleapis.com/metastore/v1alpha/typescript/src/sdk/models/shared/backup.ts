import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInput } from "./service";
import { Service } from "./service";


export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Restoring = "RESTORING"
}


// BackupInput
/** 
 * The details of a backup resource.
**/
export class BackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRevision" })
  serviceRevision?: ServiceInput;
}


// Backup
/** 
 * The details of a backup resource.
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restoringServices" })
  restoringServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceRevision" })
  serviceRevision?: Service;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BackupStateEnum;
}
