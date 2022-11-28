import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3NluSettings } from "./googleclouddialogflowcxv3nlusettings";


export enum GoogleCloudDialogflowCxV3VersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3Version
/** 
 * Represents a version of a flow.
**/
export class GoogleCloudDialogflowCxV3Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3NluSettings;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3VersionStateEnum;
}


// GoogleCloudDialogflowCxV3VersionInput
/** 
 * Represents a version of a flow.
**/
export class GoogleCloudDialogflowCxV3VersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3NluSettings;
}
