import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3NluSettings } from "./googleclouddialogflowcxv3nlusettings";

export enum GoogleCloudDialogflowCxV3VersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3Version
/** 
 * Represents a version of a flow.
**/
export class GoogleCloudDialogflowCxV3Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3NluSettings;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3VersionStateEnum;
}
