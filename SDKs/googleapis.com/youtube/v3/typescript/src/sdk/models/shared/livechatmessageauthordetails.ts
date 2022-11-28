import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatMessageAuthorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelUrl" })
  channelUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isChatModerator" })
  isChatModerator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isChatOwner" })
  isChatOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isChatSponsor" })
  isChatSponsor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isVerified" })
  isVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=profileImageUrl" })
  profileImageUrl?: string;
}
