import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SetMuteRequestMuteEnum {
    MuteUnspecified = "MUTE_UNSPECIFIED",
    Muted = "MUTED",
    Unmuted = "UNMUTED",
    Undefined = "UNDEFINED"
}
/**
 * Request message for updating a finding's mute status.
**/
export declare class SetMuteRequest extends SpeakeasyBase {
    mute?: SetMuteRequestMuteEnum;
}
