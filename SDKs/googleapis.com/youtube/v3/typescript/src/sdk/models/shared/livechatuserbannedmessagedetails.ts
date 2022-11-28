import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";


export enum LiveChatUserBannedMessageDetailsBanTypeEnum {
    Permanent = "permanent",
    Temporary = "temporary"
}


export class LiveChatUserBannedMessageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=banDurationSeconds" })
  banDurationSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=banType" })
  banType?: LiveChatUserBannedMessageDetailsBanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=bannedUserDetails" })
  bannedUserDetails?: ChannelProfileDetails;
}
