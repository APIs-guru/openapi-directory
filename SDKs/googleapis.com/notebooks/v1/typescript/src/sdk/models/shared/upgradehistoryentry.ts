import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpgradeHistoryEntryActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Upgrade = "UPGRADE",
    Rollback = "ROLLBACK"
}

export enum UpgradeHistoryEntryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Started = "STARTED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// UpgradeHistoryEntry
/** 
 * The entry of VM image upgrade history.
**/
export class UpgradeHistoryEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: UpgradeHistoryEntryActionEnum;

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshot" })
  snapshot?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: UpgradeHistoryEntryStateEnum;

  @SpeakeasyMetadata({ data: "json, name=targetImage" })
  targetImage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetVersion" })
  targetVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=vmImage" })
  vmImage?: string;
}
