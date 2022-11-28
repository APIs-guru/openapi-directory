import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountYouTubeChannelLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
