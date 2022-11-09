import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";

export enum LiveChatUserBannedMessageDetailsBanTypeEnum {
    Permanent = "permanent"
,    Temporary = "temporary"
}


export class LiveChatUserBannedMessageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=banDurationSeconds" })
  banDurationSeconds?: string;

  @Metadata({ data: "json, name=banType" })
  banType?: LiveChatUserBannedMessageDetailsBanTypeEnum;

  @Metadata({ data: "json, name=bannedUserDetails" })
  bannedUserDetails?: ChannelProfileDetails;
}
