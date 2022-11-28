import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfile } from "./deviceprofile";
import { MediaProtocolEnum } from "./mediaprotocolenum";



// OpenLiveStreamDto
/** 
 * Open live stream dto.
**/
export class OpenLiveStreamDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=DeviceProfile" })
  deviceProfile?: DeviceProfile;

  @SpeakeasyMetadata({ data: "json, name=DirectPlayProtocols" })
  directPlayProtocols?: MediaProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=EnableDirectPlay" })
  enableDirectPlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableDirectStream" })
  enableDirectStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxAudioChannels" })
  maxAudioChannels?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=OpenToken" })
  openToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTimeTicks" })
  startTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
