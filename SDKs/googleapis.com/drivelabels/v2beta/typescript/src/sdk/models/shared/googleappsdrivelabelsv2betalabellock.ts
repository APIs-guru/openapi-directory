import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelLockCapabilities } from "./googleappsdrivelabelsv2betalabellockcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";


export enum GoogleAppsDriveLabelsV2betaLabelLockStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleting = "DELETING"
}


// GoogleAppsDriveLabelsV2betaLabelLock
/** 
 * A Lock that can be applied to a Label, Field, or Choice.
**/
export class GoogleAppsDriveLabelsV2betaLabelLock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: GoogleAppsDriveLabelsV2betaLabelLockCapabilities;

  @SpeakeasyMetadata({ data: "json, name=choiceId" })
  choiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleAppsDriveLabelsV2betaLabelLockStateEnum;
}
