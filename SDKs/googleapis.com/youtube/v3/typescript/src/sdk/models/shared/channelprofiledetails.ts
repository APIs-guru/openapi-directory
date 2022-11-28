import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelProfileDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelUrl" })
  channelUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=profileImageUrl" })
  profileImageUrl?: string;
}
