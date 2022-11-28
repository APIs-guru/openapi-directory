import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
export declare enum LiveChatUserBannedMessageDetailsBanTypeEnum {
    Permanent = "permanent",
    Temporary = "temporary"
}
export declare class LiveChatUserBannedMessageDetails extends SpeakeasyBase {
    banDurationSeconds?: string;
    banType?: LiveChatUserBannedMessageDetailsBanTypeEnum;
    bannedUserDetails?: ChannelProfileDetails;
}
