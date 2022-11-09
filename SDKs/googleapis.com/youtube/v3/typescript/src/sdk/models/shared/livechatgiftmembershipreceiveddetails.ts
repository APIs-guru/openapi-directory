import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatGiftMembershipReceivedDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedMembershipGiftingMessageId" })
  associatedMembershipGiftingMessageId?: string;

  @Metadata({ data: "json, name=gifterChannelId" })
  gifterChannelId?: string;

  @Metadata({ data: "json, name=memberLevelName" })
  memberLevelName?: string;
}
