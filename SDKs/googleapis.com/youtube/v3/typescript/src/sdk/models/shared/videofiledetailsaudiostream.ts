import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoFileDetailsAudioStream
/** 
 * Information about an audio stream.
**/
export class VideoFileDetailsAudioStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitrateBps" })
  bitrateBps?: string;

  @SpeakeasyMetadata({ data: "json, name=channelCount" })
  channelCount?: number;

  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
