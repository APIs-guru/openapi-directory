import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";

export enum LiveChatBanSnippetTypeEnum {
    LiveChatBanTypeUnspecified = "liveChatBanTypeUnspecified"
,    Permanent = "permanent"
,    Temporary = "temporary"
}


export class LiveChatBanSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=banDurationSeconds" })
  banDurationSeconds?: string;

  @Metadata({ data: "json, name=bannedUserDetails" })
  bannedUserDetails?: ChannelProfileDetails;

  @Metadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @Metadata({ data: "json, name=type" })
  type?: LiveChatBanSnippetTypeEnum;
}
