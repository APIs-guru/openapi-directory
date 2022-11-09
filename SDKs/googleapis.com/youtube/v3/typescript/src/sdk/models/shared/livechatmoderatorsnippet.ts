import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";


export class LiveChatModeratorSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @Metadata({ data: "json, name=moderatorDetails" })
  moderatorDetails?: ChannelProfileDetails;
}
