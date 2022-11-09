import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChannelProfileDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelUrl" })
  channelUrl?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=profileImageUrl" })
  profileImageUrl?: string;
}
