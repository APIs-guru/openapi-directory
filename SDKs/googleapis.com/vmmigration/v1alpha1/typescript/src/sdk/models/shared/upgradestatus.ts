import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";


export enum UpgradeStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}


// UpgradeStatus
/** 
 * UpgradeStatus contains information about upgradeAppliance operation.
**/
export class UpgradeStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=previousVersion" })
  previousVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: UpgradeStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
