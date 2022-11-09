import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoFileDetailsAudioStream
/** 
 * Information about an audio stream.
**/
export class VideoFileDetailsAudioStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitrateBps" })
  bitrateBps?: string;

  @Metadata({ data: "json, name=channelCount" })
  channelCount?: number;

  @Metadata({ data: "json, name=codec" })
  codec?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
