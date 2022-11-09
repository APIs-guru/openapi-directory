import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaLabelLockCapabilities } from "./googleappsdrivelabelsv2betalabellockcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";

export enum GoogleAppsDriveLabelsV2betaLabelLockStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
}


// GoogleAppsDriveLabelsV2betaLabelLock
/** 
 * A Lock that can be applied to a Label, Field, or Choice.
**/
export class GoogleAppsDriveLabelsV2betaLabelLock extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities?: GoogleAppsDriveLabelsV2betaLabelLockCapabilities;

  @Metadata({ data: "json, name=choiceId" })
  choiceId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policyUri" })
  policyUri?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleAppsDriveLabelsV2betaLabelLockStateEnum;
}
