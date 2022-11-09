import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpgradeHistoryEntryActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED"
,    Upgrade = "UPGRADE"
,    Rollback = "ROLLBACK"
}

export enum UpgradeHistoryEntryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Started = "STARTED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// UpgradeHistoryEntry
/** 
 * The entry of VM image upgrade history.
**/
export class UpgradeHistoryEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: UpgradeHistoryEntryActionEnum;

  @Metadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=framework" })
  framework?: string;

  @Metadata({ data: "json, name=snapshot" })
  snapshot?: string;

  @Metadata({ data: "json, name=state" })
  state?: UpgradeHistoryEntryStateEnum;

  @Metadata({ data: "json, name=targetImage" })
  targetImage?: string;

  @Metadata({ data: "json, name=targetVersion" })
  targetVersion?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=vmImage" })
  vmImage?: string;
}
