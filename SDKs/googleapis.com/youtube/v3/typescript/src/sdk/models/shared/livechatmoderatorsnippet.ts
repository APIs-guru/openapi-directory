import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";



export class LiveChatModeratorSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @SpeakeasyMetadata({ data: "json, name=moderatorDetails" })
  moderatorDetails?: ChannelProfileDetails;
}
