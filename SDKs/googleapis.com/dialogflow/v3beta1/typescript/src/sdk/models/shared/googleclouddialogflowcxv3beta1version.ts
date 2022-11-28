import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1NluSettings } from "./googleclouddialogflowcxv3beta1nlusettings";


export enum GoogleCloudDialogflowCxV3beta1VersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3beta1VersionInput
/** 
 * Represents a version of a flow.
**/
export class GoogleCloudDialogflowCxV3beta1VersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
}


// GoogleCloudDialogflowCxV3beta1Version
/** 
 * Represents a version of a flow.
**/
export class GoogleCloudDialogflowCxV3beta1Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3beta1VersionStateEnum;
}
