import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatMessageAuthorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelUrl" })
  channelUrl?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isChatModerator" })
  isChatModerator?: boolean;

  @Metadata({ data: "json, name=isChatOwner" })
  isChatOwner?: boolean;

  @Metadata({ data: "json, name=isChatSponsor" })
  isChatSponsor?: boolean;

  @Metadata({ data: "json, name=isVerified" })
  isVerified?: boolean;

  @Metadata({ data: "json, name=profileImageUrl" })
  profileImageUrl?: string;
}
