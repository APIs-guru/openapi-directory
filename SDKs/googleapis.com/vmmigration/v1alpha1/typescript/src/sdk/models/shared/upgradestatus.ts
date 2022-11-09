import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";

export enum UpgradeStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Failed = "FAILED"
,    Succeeded = "SUCCEEDED"
}


// UpgradeStatus
/** 
 * UpgradeStatus contains information about upgradeAppliance operation.
**/
export class UpgradeStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=previousVersion" })
  previousVersion?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: UpgradeStatusStateEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
