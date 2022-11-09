import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceProfile } from "./deviceprofile";
import { MediaProtocolEnum } from "./mediaprotocolenum";


// OpenLiveStreamDto
/** 
 * Open live stream dto.
**/
export class OpenLiveStreamDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "json, name=DeviceProfile" })
  deviceProfile?: DeviceProfile;

  @Metadata({ data: "json, name=DirectPlayProtocols" })
  directPlayProtocols?: MediaProtocolEnum[];

  @Metadata({ data: "json, name=EnableDirectPlay" })
  enableDirectPlay?: boolean;

  @Metadata({ data: "json, name=EnableDirectStream" })
  enableDirectStream?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=MaxAudioChannels" })
  maxAudioChannels?: number;

  @Metadata({ data: "json, name=MaxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @Metadata({ data: "json, name=OpenToken" })
  openToken?: string;

  @Metadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;

  @Metadata({ data: "json, name=StartTimeTicks" })
  startTimeTicks?: number;

  @Metadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
