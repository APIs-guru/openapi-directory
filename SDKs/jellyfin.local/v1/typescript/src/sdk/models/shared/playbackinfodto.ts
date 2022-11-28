import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfile } from "./deviceprofile";



// PlaybackInfoDto
/** 
 * Plabyback info dto.
**/
export class PlaybackInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowAudioStreamCopy" })
  allowAudioStreamCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowVideoStreamCopy" })
  allowVideoStreamCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=AutoOpenLiveStream" })
  autoOpenLiveStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeviceProfile" })
  deviceProfile?: DeviceProfile;

  @SpeakeasyMetadata({ data: "json, name=EnableDirectPlay" })
  enableDirectPlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableDirectStream" })
  enableDirectStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableTranscoding" })
  enableTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxAudioChannels" })
  maxAudioChannels?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTimeTicks" })
  startTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
