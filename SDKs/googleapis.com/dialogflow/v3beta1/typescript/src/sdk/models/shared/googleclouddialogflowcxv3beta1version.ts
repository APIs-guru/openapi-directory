import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1NluSettings } from "./googleclouddialogflowcxv3beta1nlusettings";

export enum GoogleCloudDialogflowCxV3beta1VersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3beta1Version
/** 
 * Represents a version of a flow.
**/
export class GoogleCloudDialogflowCxV3beta1Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3beta1VersionStateEnum;
}
