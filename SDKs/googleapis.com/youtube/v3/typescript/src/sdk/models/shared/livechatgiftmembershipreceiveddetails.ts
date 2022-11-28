import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatGiftMembershipReceivedDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedMembershipGiftingMessageId" })
  associatedMembershipGiftingMessageId?: string;

  @SpeakeasyMetadata({ data: "json, name=gifterChannelId" })
  gifterChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=memberLevelName" })
  memberLevelName?: string;
}
