import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
export declare enum LiveChatBanSnippetTypeEnum {
    LiveChatBanTypeUnspecified = "liveChatBanTypeUnspecified",
    Permanent = "permanent",
    Temporary = "temporary"
}
export declare class LiveChatBanSnippet extends SpeakeasyBase {
    banDurationSeconds?: string;
    bannedUserDetails?: ChannelProfileDetails;
    liveChatId?: string;
    type?: LiveChatBanSnippetTypeEnum;
}
