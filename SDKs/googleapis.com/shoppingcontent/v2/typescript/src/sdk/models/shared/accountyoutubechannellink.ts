import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountYouTubeChannelLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
