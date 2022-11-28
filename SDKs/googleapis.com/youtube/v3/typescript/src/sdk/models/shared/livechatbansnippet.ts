import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";


export enum LiveChatBanSnippetTypeEnum {
    LiveChatBanTypeUnspecified = "liveChatBanTypeUnspecified",
    Permanent = "permanent",
    Temporary = "temporary"
}


export class LiveChatBanSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=banDurationSeconds" })
  banDurationSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=bannedUserDetails" })
  bannedUserDetails?: ChannelProfileDetails;

  @SpeakeasyMetadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LiveChatBanSnippetTypeEnum;
}
