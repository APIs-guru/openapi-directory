import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceProfile } from "./deviceprofile";


// PlaybackInfoDto
/** 
 * Plabyback info dto.
**/
export class PlaybackInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowAudioStreamCopy" })
  allowAudioStreamCopy?: boolean;

  @Metadata({ data: "json, name=AllowVideoStreamCopy" })
  allowVideoStreamCopy?: boolean;

  @Metadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "json, name=AutoOpenLiveStream" })
  autoOpenLiveStream?: boolean;

  @Metadata({ data: "json, name=DeviceProfile" })
  deviceProfile?: DeviceProfile;

  @Metadata({ data: "json, name=EnableDirectPlay" })
  enableDirectPlay?: boolean;

  @Metadata({ data: "json, name=EnableDirectStream" })
  enableDirectStream?: boolean;

  @Metadata({ data: "json, name=EnableTranscoding" })
  enableTranscoding?: boolean;

  @Metadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "json, name=MaxAudioChannels" })
  maxAudioChannels?: number;

  @Metadata({ data: "json, name=MaxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @Metadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "json, name=StartTimeTicks" })
  startTimeTicks?: number;

  @Metadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
