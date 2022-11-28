import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelLockCapabilities } from "./googleappsdrivelabelsv2betalabellockcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
export declare enum GoogleAppsDriveLabelsV2betaLabelLockStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleting = "DELETING"
}
/**
 * A Lock that can be applied to a Label, Field, or Choice.
**/
export declare class GoogleAppsDriveLabelsV2betaLabelLock extends SpeakeasyBase {
    capabilities?: GoogleAppsDriveLabelsV2betaLabelLockCapabilities;
    choiceId?: string;
    createTime?: string;
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    deleteTime?: string;
    fieldId?: string;
    name?: string;
    state?: GoogleAppsDriveLabelsV2betaLabelLockStateEnum;
}
