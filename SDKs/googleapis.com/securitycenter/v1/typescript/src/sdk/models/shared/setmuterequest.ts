import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SetMuteRequestMuteEnum {
    MuteUnspecified = "MUTE_UNSPECIFIED"
,    Muted = "MUTED"
,    Unmuted = "UNMUTED"
,    Undefined = "UNDEFINED"
}


// SetMuteRequest
/** 
 * Request message for updating a finding's mute status.
**/
export class SetMuteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mute" })
  mute?: SetMuteRequestMuteEnum;
}
